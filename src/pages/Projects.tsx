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
			<div id="projects-page">
				<div className="page-header">
					<h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
					<p>A collection of my past projects. See my most up-to-date publications <Link to="/">here</Link>.</p>
				</div>
				{data.map((project) => (
					<Cell
						data={project}
						key={project.title}
					/>
				))}
				<p className="more-coming">More coming soon...</p>
			</div>
		</Main>
	);
}
