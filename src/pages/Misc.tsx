import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import JustifiedPhotoGrid from '../components/cards/JustifiedPhotoGrid';

const photoFolder = `${process.env.PUBLIC_URL}/images/photos/`;

function imgURL(imageName: string) {
	return `${photoFolder}/${imageName}.JPG`;
}

export default function Misc() {
	const photos = [
		{ src: imgURL('cat'), alt: 'My cat', caption: 'My cat' },
		{ src: imgURL('crater'), alt: 'Crater Lake, Oregon', caption: 'Crater Lake, Oregon' },
		{ src: imgURL('oregon1'), alt: 'Hood River, Oregon', caption: 'Hood River, Oregon' },
		{ src: imgURL('mexico1'), alt: 'Chinatown in Mexico City', caption: 'Chinatown, Mexico City' },
		{ src: imgURL('oregon2'), alt: 'Mt Hood, Oregon', caption: 'Mt Hood, Oregon' },
		{ src: imgURL('spain1'), alt: 'Seville, Spain', caption: 'Seville, Spain' },
		{ src: imgURL('spain6'), alt: 'Santiago, Spain', caption: 'Santiago, Spain' },
		{ src: imgURL('spain5'), alt: 'Camino de Santiago, Spain', caption: 'Camino de Santiago, Spain' },
		{ src: imgURL('spain2'), alt: 'Granada, Spain', caption: 'Granada, Spain' },
		{ src: imgURL('spain4'), alt: 'Alhambra Palace, Spain', caption: 'Alhambra Palace, Spain' },
		{ src: imgURL('ithaca2'), alt: 'Indian Creek Farm, Ithaca', caption: 'Indian Creek Farm, Ithaca' },
		{ src: imgURL('costarica2'), alt: 'Santa Ana, Costa Rica', caption: 'Santa Ana, Costa Rica' },
		{ src: imgURL('costarica3'), alt: 'Manuel Antonio, Costa Rica', caption: 'Manuel Antonio, Costa Rica' },
		{ src: imgURL('ecuador2'), alt: 'Galápagos, Ecuador', caption: 'Galápagos, Ecuador' },
		{ src: imgURL('seaside'), alt: 'Seaside, Oregon', caption: 'Seaside, Oregon' },
		{ src: imgURL('myself'), alt: 'Me taking photo for myself', caption: 'Me taking photo for myself' },
	];

	return (
		<Main
			title="Misc"
			description="Fun things outside of research"
			fullPage
		>
			<div id="misc-page">
				<div className="page-header">
					<h2 data-testid="heading"><Link to="/misc">Misc</Link></h2>
					<p>Fun stuffs I do outside of research</p>
				</div>

				<div className="page-subsection">
					<div className="page-subsection-header">
						<h3>Photography</h3>
						<p>I enjoy recording cherishable moments with pictures. I mostly do landscape photography, while I am learning to take portraits.</p>
					</div>
					<JustifiedPhotoGrid images={photos} />

					<div className="page-subsection-header" style={{paddingTop: "20px"}}>
						<h3>Performing Arts</h3>
						<p>
							At Princeton, I am a member of the  
							<a href="https://www.instagram.com/princeton_huadance/" target="_blank" rel="noreferrer">
							{"	HUA Chinese Dance Group"}
							</a>, where I perform traditional Chinese and folk dances. I also sing with 
							<a href="https://www.princetonplayhouse.com/" target="_blank" rel="noreferrer">
							{"	Playhouse Choir"}
							</a>, focusing on repertoire from Broadway musical pieces to innovative music-making. See if you can spot me in 
							<a href="https://www.youtube.com/watch?v=phYpazJS31o" target="_blank" rel="noreferrer">
							{"	this performance"}
							</a>.
						</p>
					</div>
				</div>

			</div>
		</Main>
	);
}
