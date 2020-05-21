import React from "react";
import {ReactComponent as CodeSVG} from "../assets/svg/code.svg";
import {ReactComponent as DownSVG} from "../assets/svg/down-arrow.svg";
import myAvatar from "../assets/images/myAvatar.png";
import Button from "../Button";

const Home = () => {
	return (
		<main className="main-wrapper">
			<section className="hero">
				<section className="hero-display">
					<div className="just-here-to-align-flex"/>
					<h1 className="hero-title">
						Je suis François Huszti, <span className="span-job">développeur web fullstack,</span> et j'aimerai apporter ma pierre à votre édifice
					</h1>
					<section className="hero-buttons">
						<Button path="/cv" value="Voir mon CV" classNames="secondary"/>
						<Button path="/cv-interactive" value="Accéder à mon CV interactif" classNames="primary"/>
					</section>
					<section className="hero-scroll-link">
						<p>Résumé de mes compétences et projets par ici</p>
						<DownSVG width="1em" height="1em"/>
					</section>
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

export default Home;