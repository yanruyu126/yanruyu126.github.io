import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import PhotoCard from '../components/cards/PhotoCard';

const photoFolder = `${process.env.PUBLIC_URL}/images/photos/`

function imgURL(imageName: string) {
	return `${photoFolder}/${imageName}.JPG`;
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
				<div style={{ display: "flex", flexDirection: "row", height: "38vh", justifyContent: "space-between" }}>
					<PhotoCard imageURL={imgURL("myself")} description="Me taking photo for myself" />
					<PhotoCard imageURL={imgURL("spain1")} description="Seville, Spain" />
					<PhotoCard imageURL={imgURL("spain6")} description="Santiago, Spain" />
					<PhotoCard imageURL={imgURL("spain5")} description="Camino de Santiago, Spain" />
				</div>
				<div style={{ display: "flex", flexDirection: "row", height: "46vh", justifyContent: "space-between" }}>
					<PhotoCard imageURL={imgURL("spain2")} description="Granada, Spain" height={80} />
					<PhotoCard imageURL={imgURL("mexico1")} description="Chinatown in Mexico City" height={80} />
					<PhotoCard imageURL={imgURL("spain4")} description="Alhambra Palace, Spain" height={80} />
				</div>
				<div style={{ display: "flex", flexDirection: "row", height: "36vh", justifyContent: "space-between" }}>
					<PhotoCard imageURL={imgURL("ithaca2")} description="Indian Creek Farm, Ithaca" />
					<PhotoCard imageURL={imgURL("costarica2")} description="Santa Ana, Costa Rica" />
					<PhotoCard imageURL={imgURL("costarica3")} description="Manuel Antonio, Costa Rica" />
					<PhotoCard imageURL={imgURL("ecuador2")} description="Galápagos, Ecuador" />
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