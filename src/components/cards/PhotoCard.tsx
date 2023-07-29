import { Paper } from '@mui/material';
import React from 'react';

interface PhotoCardProps {
  imageURL: string;
  description: string;
  height?: number;
  textPadding?: number;
  style?: React.CSSProperties; // Define the style prop to accept CSS properties
}

function PhotoCard({ imageURL, description, height = 70, textPadding = 20, style }: PhotoCardProps) {
  const paperStyle = {
    margin: "10px",
    ...style
  };
	return <Paper elevation={2} style={paperStyle}>
		<img style={{height: `${height}%`, width:'100%'}} src={imageURL}/>
		<p style={{padding: `${textPadding}px 0px`, textAlign:"center", margin: 0}}> {description} </p>
	</Paper>
}

export default PhotoCard;