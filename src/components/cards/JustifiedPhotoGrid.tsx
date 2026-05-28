import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import PhotoCard from './PhotoCard';

export interface JustifiedPhoto {
  src: string;
  alt: string;
  caption: string;
}

interface JustifiedPhotoGridProps {
  images: JustifiedPhoto[];
  gap?: number;
  idealRowHeight?: number;
  minRowHeight?: number;
  maxRowHeight?: number;
}

interface RowItem extends JustifiedPhoto {
  aspectRatio: number;
  width: number;
}

interface AspectItem extends JustifiedPhoto {
  aspectRatio: number;
}

interface PhotoRow {
  items: RowItem[];
  height: number;
}

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

const computeRows = (
  items: Array<AspectItem>,
  containerWidth: number,
  gap: number,
  idealHeight: number,
  minHeight: number,
  maxHeight: number,
): PhotoRow[] => {
  if (!items.length || containerWidth <= 0) return [];

  const rows: PhotoRow[] = [];
  let current: AspectItem[] = [];
  let ratioSum = 0;

  const isNarrow = containerWidth < 600;
  const idealTolerance = isNarrow ? 0.5 : 0.25;

  const buildRow = (rowItems: AspectItem[], rowIdealHeight: number, forceIdeal = false) => {
    
    const totalGap = gap * Math.max(0, rowItems.length - 1);

    const rawHeight =
      (containerWidth - totalGap) /
      rowItems.reduce((sum, i) => sum + i.aspectRatio, 0);

   
    const maxStretchHeight = maxHeight * 1.25;

    let height = forceIdeal ? rowIdealHeight : rawHeight;
    height = clamp(height, minHeight, maxStretchHeight);
 
    const itemsWithWidth = rowItems.map((item) => ({
      ...item,
      width: Math.round(height * item.aspectRatio),
    }));

    rows.push({
      items: itemsWithWidth as RowItem[],
      height,
    });
  };

  let rowIdealHeight = idealHeight;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    current.push(item);
    ratioSum += item.aspectRatio;

    const totalGap = gap * Math.max(0, current.length - 1);
    const projectedHeight =
      (containerWidth - totalGap) / ratioSum;

    // Dynamic ideal for current row
    const avgAspectRatio =
      ratioSum / current.length;
    const aspectRatioFactor = avgAspectRatio / 1.5;
    rowIdealHeight = clamp(
      idealHeight / Math.sqrt(aspectRatioFactor),
      minHeight,
      maxHeight,
    );

    const deviation =
      (rowIdealHeight - projectedHeight) / rowIdealHeight;

    const tooSmall = projectedHeight < minHeight;

    const closeToIdeal = deviation > idealTolerance;

    const shouldBreak =
      tooSmall ||
      (closeToIdeal && current.length >= 2);

    if (shouldBreak && current.length > 1) {
      const last = current.pop();
      if (last) {
        ratioSum -= last.aspectRatio;
        buildRow(current, rowIdealHeight);
        current = [last];
        ratioSum = last.aspectRatio;
      }
    }
  }

  if (current.length) {
    buildRow(current, rowIdealHeight, true);
  }

  return rows;
};

export default function JustifiedPhotoGrid({
  images,
  gap = 10,
  idealRowHeight = 220,
  minRowHeight = 100,
  maxRowHeight = 300,
}: JustifiedPhotoGridProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [ratios, setRatios] = useState<number[]>([]);

  useEffect(() => {
    let active = true;
    const loaders = images.map(image =>
      new Promise<number>(resolve => {
        const img = new window.Image();
        img.src = image.src;

        const handleLoad = () => {
          resolve(img.naturalWidth / img.naturalHeight || 1);
        };

        if (img.complete && img.naturalWidth > 0 && img.naturalHeight > 0) {
          handleLoad();
        } else {
          img.onload = handleLoad;
          img.onerror = () => resolve(1);
        }
      }),
    );

    Promise.all(loaders).then(values => {
      if (active) {
        setRatios(values);
      }
    });

    return () => {
      active = false;
    };
  }, [images]);

  useLayoutEffect(() => {
    const node = containerRef.current;
    if (!node) {
      return undefined;
    }

    const updateWidth = () => {
      setContainerWidth(node.clientWidth);
    };

    updateWidth();

    const observer = new ResizeObserver(() => {
      updateWidth();
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  const rows = useMemo(() => {
    if (ratios.length !== images.length || containerWidth <= 0) {
      return [] as PhotoRow[];
    }

    const items = images.map((image, index) => ({
      ...image,
      aspectRatio: ratios[index],
    }));

    return computeRows(items, containerWidth, gap, idealRowHeight, minRowHeight, maxRowHeight);
  }, [containerWidth, gap, images, idealRowHeight, maxRowHeight, minRowHeight, ratios]);

  return (
    <div className="justified-photo-grid" ref={containerRef}>
      {rows.length > 0 ? (
        rows.map((row, rowIndex) => (
          <div className="justified-row" key={`row-${rowIndex}`}>
            {row.items.map((item, itemIndex) => (
              <PhotoCard
                key={`${item.src}-${itemIndex}`}
                imageURL={item.src}
                description={item.caption}
                style={{ width: `${item.width}px`, margin: 0 }}
                imgStyle={{ height: `${row.height}px`, width: 'auto', objectFit: 'cover', display: 'block' }}
              />
            ))}
          </div>
        ))
      ) : (
        <div className="justified-row placeholder-row">
          {images.map((item, itemIndex) => (
            <div key={`${item.src}-${itemIndex}`} className="justified-item placeholder-item">
              <div className="justified-item-image placeholder-image" />
              <p className="justified-caption">{item.caption}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
