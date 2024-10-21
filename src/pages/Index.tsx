import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

import publications from '../data/publications';
import PublicationCell from '../components/cards/PublicationCell';
import ImageOverText from '../components/cards/ImageOverText';

const { PUBLIC_URL } = process.env;

export default function Index() {
	const labCatText = <ImageOverText text='Lab Cat' imageLabel='Me and the Lab Cat' imageURL={`${PUBLIC_URL}images/RuyuAndLabCat.jpg`}/>;
  return (
		<Main
			title="About"
			description="Ruyu Yan's Personal Page"
		>
			<article className="post" id="index">
				<header>
					<div className="title">
					<h2 data-testid="heading"><Link to="/">About Me</Link></h2>
					</div>
				</header>
				<p>
					I am a second year CS Ph.D. student at Princeton University working with Professors <a href="https://www.cs.princeton.edu/~af/">Adam Finkelstein</a> and <a href="https://www.cs.princeton.edu/~fheide/">Felix Heide</a>.
					My research spans graphics, vision, and HCI, with a focus on AI for content creation and 
					computational photography. I am interested in exploring methods that combine mathematical 
					models of both problems in image processing and user experience to tackle new applications. 
				</p>
				<p>
					Previously, I completed my undergraduate studies at Cornell University, majoring in Computer 
					Science and minoring in Psychology. I was fortunate to be advised by Professor <a href="http://abedavis.com/">Abe Davis</a> and 
					spent two wonderful years with the <a href="https://rgb.cs.cornell.edu/">Cornell Vision & Graphics Group</a>
					, where I became good friends with the {labCatText}. 
				</p>
				{/* <h3>Publications</h3>
				<div>
				<p className="publication">Ilya Chugunov, David Shustin, <span style={{fontWeight:"bold"}}>Ruyu Yan</span>, Chenyang Lei, and Felix Heide. Neural Spline Fields for Burst Image Fusion and Layer Separation. <span style={{fontStyle:"italic"}}>IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR '24)</span>. [<a href="https://light.princeton.edu/publication/nsf/">website</a>]</p>
					<p className="publication">Eric Ming Chen, Sidhanth Holalkere, <span style={{fontWeight:"bold"}}>Ruyu Yan</span>, Kai Zhang, and Abe Davis. Ray Conditioning: Trading Photo-realism for Photo-Consistency in Multi-view Image Generation. <span style={{fontStyle:"italic"}}>IEEE/CVF International Conference on Computer Vision (ICCV '23)</span>. [<a href="http://ray-cond.github.io">website</a>]</p>
					<p className="publication"><span style={{fontWeight:"bold"}}>Ruyu Yan</span>, Jiatian Sun, Longxiulin Deng, and Abe Davis. ReCapture: AR-Guided Time-lapse Photography. <span style={{fontStyle:"italic"}}>In The 35th Annual ACM Symposium on User Interface Software and Technology (UIST ’22)</span>. [<a href="http://www.cs.cornell.edu/abe/projects/recapture/">website</a>]</p>
				</div> */}
			</article>

			<article className="post" id="index">
				<header>
					<div className="title">
					<h2 data-testid="heading">Publications</h2>
					</div>
				</header>
				{publications.map((project) => (
					<PublicationCell
						data={project}
						key={project.title}
					/>
				))}
				<div style={{height:"30px"}}/> {/* spacer */}
			</article>
		</Main>
	)
}