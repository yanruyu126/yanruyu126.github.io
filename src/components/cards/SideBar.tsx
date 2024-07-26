import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

// TODO: Button text update according to path name
export default function SideBar() {
	return (
		<section id="sidebar">
			<section id="intro">
			<Link to="/" className="logo">
				<img src={`${PUBLIC_URL}/images/portrait.png`} alt="" />
			</Link>
			<header>
				<h2>Ruyu Yan 颜如玉</h2>
				<p>CS Ph.D. Student @ Princeton</p>
			</header>
			<ul className="actions">
				<li>
					<a className="button" href={`${PUBLIC_URL}/documents/Ruyu_Yan_Resume_aug23.pdf`}>Resume</a>
				</li>
			</ul>
			</section>

			<section id="footer">
				<ContactIcons />
				<p className="copyright">&copy; 2024 Ruyu Yan. Powered by <a href="https://mldangelo.com/">mldangelo.com</a>.</p>
			</section>
		</section>
	)
}