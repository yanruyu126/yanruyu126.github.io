import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

import publications from '../data/publications';
import PublicationCell from '../components/cards/PublicationCell';
import ImageOverText from '../components/cards/ImageOverText';
import ContactIcons from '../components/contact/ContactIcons';

const { PUBLIC_URL } = process.env;

export default function Index() {
	const labCatText = <ImageOverText text='Lab Cat' imageLabel='Me and the Lab Cat' imageURL={`${PUBLIC_URL}images/RuyuAndLabCat.jpg`}/>;
  return (
		<Main
			title="About"
			description="Ruyu Yan's Personal Page"
			fullPage
		>
			<div id="index">
				<section className="about-section">
					<div className="about-layout">
						<div className="about-bio">
							<div className="about-bio-header">
								<h2 data-testid="heading"><Link to="/">About Me</Link></h2>
							</div>
							<p>
								I am a fourth year CS Ph.D. student at Princeton University working with Professors <a href="https://www.cs.princeton.edu/~af/">Adam Finkelstein</a> and <a href="https://www.cs.princeton.edu/~fheide/">Felix Heide</a>.
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
						</div>
						<div className="about-profile">
							<img src={`${PUBLIC_URL}/images/portrait.png`} alt="Ruyu Yan" className="about-portrait" />
							<div className="about-identity">
								<h2 className="about-name">Ruyu Yan 颜如玉</h2>
								<ul className="actions">
									<li>
										<a className="button" href={`${PUBLIC_URL}/documents/Ruyu_CV_May26.pdf`}>curriculum vitae</a>
									</li>
								</ul>
								<ContactIcons />
							</div>
						</div>
					</div>
				</section>

				<section className="publications-section">
					<h2>Publications</h2>
					{publications.map((project) => (
						<PublicationCell
							data={project}
							key={project.title}
						/>
					))}
				</section>
			</div>
		</Main>
	)
}