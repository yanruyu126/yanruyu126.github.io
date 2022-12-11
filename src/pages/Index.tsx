import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

import data from '../data/project-hightlight';
import Cell from '../components/cards/ProjectCellSmall';

export default function Index() {
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
				<p> Hi! I am Ruyu Yan (颜如玉), an undergraduate student at Cornell University studying Computer Science. 
					I do research on Computer Graphics and Human-Computer Interaction, with a focus on AR/VR and image processing. 
					I am interested in building tools that assist people in exploring the physical world and creating new content.
				</p>
				<p> I currently work as a full-time research assistant at Prof. <a href="http://abedavis.com/">Abe Davis</a>&apos;s Lab at Cornell. 
					I am applying for Ph.D. programs in Computer Science for Fall 2023. Please contact me if you find my background a good match for your lab!</p>
				<h3>Publication</h3>
				<p style={{fontSize:"10pt"}}><span style={{fontWeight:"bold"}}>Ruyu Yan</span>, Jiatian Sun, Longxiulin Deng, and Abe Davis. 2022. ReCapture: AR-Guided Time-lapse Photography. <span style={{fontStyle:"italic"}}>In The 35th Annual ACM Symposium on User Interface Software and Technology (UIST ’22). ACM. https://doi.org/10.1145/3526113.3545641</span></p>
			</article>

			<article className="post" id="index">
				<header>
					<div className="title">
					<h2 data-testid="heading">Project Highlights</h2>
					<p>See full listing of my projects <Link to="/projects">here</Link></p>
					</div>
				</header>
				{data.map((project) => (
					<Cell
					data={project}
					key={project.title}
					/>
				))}
			</article>
		</Main>
	)
}