import React from 'react';
import Main from '../layouts/Main';

export default function InConstruction() {
	return (
		<Main
			title="Placeholder"
			description="Placeholder for constructing site"
			fullPage
		>
			<article className="post" id="in-construction">
				<header>
					<div className="title">
					<h2 data-testid="heading">In Construction</h2>
					<p>Sorry about my procrastination... maybe check back in a few weeks :P</p>
					</div>
				</header>
			</article>

		</Main>
	)
}