import React from 'react';
import './assets/scss/index.scss';
import { ReactComponent as CodeSVG } from "./assets/svg/code.svg";
import myAvatar from "./assets/images/myAvatar.png";

const App = () => {
	return (
		<main className="main-wrapper">
			<section className="hero">
				<section className="hero-display">
					<h1 className="hero-title">
						Je suis François Huszti, <span className="span-job">développeur web fullstack,</span> et j'aimerai apporter ma pierre à votre édifice
					</h1>
				</section>
				<aside className="hero-images">
					<CodeSVG className="code-svg"/>
					<img className="avatar-svg" src={myAvatar} alt="Mon avatar" />
				</aside>
			</section>
			<div className="divider-hero-skills"/>
			<section className="skills-projects">
				<section className="skills">
					Skills
				</section>
				<section className="projects">
					Projects
				</section>
			</section>
			<section className="contact">
				Contact
			</section>
		</main>
	);
};

export default App;
