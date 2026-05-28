import { Paper } from '@mui/material';
import React from 'react';

interface PhotoCardProps {
  imageURL: string;
  description: string;
  height?: number | string;
  textPadding?: number;
  style?: React.CSSProperties; // Define the style prop to accept CSS properties
  imgStyle?: React.CSSProperties;
}

function PhotoCard({ imageURL, description, height = 70, textPadding = 20, style, imgStyle }: PhotoCardProps) {
  const paperStyle = {
    margin: "10px",
    overflow: "hidden",
    ...style,
  };

  const imageStyle: React.CSSProperties = {
    height: typeof height === 'number' ? `${height}%` : height,
    width: 'auto',
    objectFit: 'cover',
    display: 'block',
    ...imgStyle,
  };

  return (
    <Paper elevation={2} style={paperStyle}>
      <img style={imageStyle} src={imageURL} alt={description} />
      <p style={{ padding: `${textPadding}px 0px`, textAlign: 'center', margin: 0 }}>
        {description}
      </p>
    </Paper>
  );
}

export default PhotoCard;