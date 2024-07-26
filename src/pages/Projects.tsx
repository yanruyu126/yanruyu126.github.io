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
			<h1 data-testid="heading"><Link to="/projects">Project Page</Link></h1>
			<p>
				A collection of my past projects. See my most up-to-date publications <Link to="/">here</Link>.
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