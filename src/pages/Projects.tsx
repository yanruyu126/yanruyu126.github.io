import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import data from '../data/projects';
import Cell from '../components/cards/ProjectCellLarge';

export default function Projects() {
	return (
		<Main
			title="Projects"
			description="Ruyu's Past Projects"
			fullPage
		>
		<header>
			<div className="title">
			<h1 data-testid="heading"><Link to="/">Project Page</Link></h1>
			<p>
				A collection of my past projects in computer graphics, vision, and HCI.
			</p>
			</div>
		</header>
		{data.map((project) => (
				<Cell
				data={project}
				key={project.title}
				/>
			))}
		<div className="cell-container project-post">
			<h5 style={{padding:"20px 20px 10px 20px", textAlign:"center"}}> More Coming Soon... </h5>
		</div>
		</Main>
	)
}