import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react';
import PhotoCard from './PhotoCard';

function ImageOverText(props: { text: string, imageLabel: string, imageURL: string }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const imageCardStyle: React.CSSProperties = { 
    position: 'absolute', 
    top: 0, 
    left: '50%', 
    transform: 'translate(-50%, -100%)', 
    zIndex: 1, 
    width:"15vw",
    minWidth:"200px",
    maxWidth:"350px",
    fontFamily:"font-family: Raleway, Helvetica, sans-serif;",
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}
    >
      {isHovering && (
        <div style={imageCardStyle}>
          <PhotoCard imageURL={props.imageURL} description={props.imageLabel} textPadding={10}/>
        </div>
      )}
      {props.text}
    </span>
  );
}

export default ImageOverText;

