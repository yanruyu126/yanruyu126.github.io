import { Paper } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const photoFolder = `${process.env.PUBLIC_URL}/images/photos/`

function photoCard(imageName: string, description: string, height: number=70) {
	return <Paper elevation={2} style={{margin:"10px"}}>
		<img style={{height: `${height}%`}} src={`${photoFolder}${imageName}.JPG`}/>
		<p style={{padding: "20px 0px", textAlign:"center"}}> {description} </p>
	</Paper>
}

export default function Misc() {
	return (
		<Main
			title="Misc"
			description="Ruyu's Past Projects"
			fullPage
		>
		<header>
			<div className="title">
			<h1 data-testid="heading"><Link to="/">MISC</Link></h1>
			<p>
			Fun stuffs I do outside of research
			</p>
			</div>
		</header>

		<div className="cell-container">
			<article className="project-post">
				<header>
					<h2>Photography</h2>
					<p style={{textTransform:"none", fontSize:"10pt"}}>I enjoy recording cherishable with pictures. I mostly do landscape photography, while I am learning to take portraits.</p>
				</header>
				<div className="description">
					<div style={{display: "flex", flexDirection: "row", height:"38vh", justifyContent:"space-between"}}> 
						{photoCard("myself", "Me taking photo for myself")}
						{photoCard("spain1", "Seville, Spain")}
						{photoCard("spain6", "Santiago, Spain")}
						{photoCard("spain5", "Camino de Santiago, Spain")}
					</div>
					<div style={{display: "flex", flexDirection: "row", height:"46vh", justifyContent:"space-between"}}> 
						{photoCard("spain2", "Granada, Spain", 80)}
						{photoCard("mexico1", "Chinatown in Mexico City", 80)}
						{photoCard("spain4", "Alhambra Palace, Spain", 80)}
					</div>
					<div style={{display: "flex", flexDirection: "row", height:"36vh", justifyContent:"space-between"}}> 
						{photoCard("ithaca2", "Indian Creek Farm, Ithaca")}
						{photoCard("costarica2", "Santa Ana, Costa Rica")}
						{photoCard("costarica3", "Manuel Antonio, Costa Rica")}
						{photoCard("ecuador2", "Galápagos, Ecuador")}
					</div>
				</div>
			</article>
		</div>

		<div className="cell-container project-post">
			<h5 style={{padding:"20px 20px 10px 20px", textAlign:"center"}}> More Coming Soon... </h5>
		</div>
		</Main>
	)
}