import React, { useState } from 'react';

interface Author {
  name: string;
  link?: string;
}

interface PublicationCellFigureData {
  src1: string; 
  src2?: string;
  isImage: boolean;
}

interface PublicationData {
  title: string;
  figure: PublicationCellFigureData;
  authors: Author[];
  conference: string;
  year: string;
  paperLink?: string;
  projectLink: string;
  codeLink?: string;
  desc: string;
}

interface PublicationCellFigureProps {
  data: PublicationCellFigureData;
  link: string;
}

interface PublicationCellProps {
  data: PublicationData;
}

// const PublicationCellFigure: React.FC<PublicationCellFigureProps> = ({ data, link }) => (
//   <div className="figure-container">
//     <a href={link}>
//       {data.isImage ? (
//         <div className="image-container">
//           <img src={`${process.env.PUBLIC_URL}${data.src1}`} className="main-image" />
//           <img src={`${process.env.PUBLIC_URL}${data.src2 ? data.src2 : data.src1}`} className="hover-image" />
//         </div>
//       ) : (
//         <video src={`${process.env.PUBLIC_URL}${data.src1}`} autoPlay loop muted playsInline />
//       )}
//     </a>
//   </div>
// );

const PublicationCellFigure: React.FC<PublicationCellFigureProps> = ({ data, link }) => {
  const [currentSrc, setCurrentSrc] = useState(data.src1);
  

  const handleMouseEnter = () => {
    if (data.src2) {
      setCurrentSrc(data.src1);
    }
  };

  const handleMouseLeave = () => {
    setCurrentSrc(data.src1);
  };

  return (
    <div className="figure-container">
      <a href={link}>
        {data.isImage ? (
          <img 
            src={`${process.env.PUBLIC_URL}${currentSrc}`} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
          />
        ) : (
          <video src={`${process.env.PUBLIC_URL}${data.src1}`} autoPlay loop muted playsInline />
        )}
      </a>
    </div>
  );
};

const PublicationCell: React.FC<PublicationCellProps> = ({ data }) => (
  <div className="publication-cell-container">
    <PublicationCellFigure data={ data.figure } link={ data.projectLink }/>
    
    <div className="card-text">
      <header>
        <h3><a href={data.projectLink}>{data.title}</a></h3>
        <p>
          {data.authors.map((author, index) => (
            <React.Fragment key={index}>
              {author.link ? (
                <a
                  href={author.link}
                  style={{ fontWeight: author.name === "Ruyu Yan" ? 'bold' : 'normal' }}
                >
                  {author.name}
                </a>
              ) : (
                <span style={{ fontWeight: author.name === "Ruyu Yan" ? 'bold' : 'normal' }}>
                  {author.name}
                </span>
              )}
              {index < data.authors.length - 1 && ', '}
            </React.Fragment>
          ))}
          <p style={{fontSize: "0.75rem", fontStyle: "italic"}}>{data.conference}, {data.year}</p>
          <p style={{fontSize: "0.75rem"}}>
            {data.projectLink && <a className="website-link" href={data.projectLink}>project website</a>}
            {data.paperLink && data.projectLink && ' / '}
            {data.paperLink && <a className="website-link" href={data.paperLink}>paper</a>}
            {data.paperLink && data.codeLink && ' / '}
            {data.codeLink && <a className="website-link" href={data.codeLink}>code</a>}
          </p>
        </p>
      </header>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </div>
  </div>
);

export default PublicationCell;

