import React from 'react';
import styles from '../../scss/main/Hero.module.scss';
import DownSVG from "../../public/svg/down-arrow.svg";
import CodeSVG from "../../public/svg/code.svg";
import Button from "../sub/Button";

const Hero = () => {
	return (
		<section className={styles.hero}>
			<section className={styles.heroDisplay}>
				<div className="just-here-to-align-flex"/>
				<h1 className={styles.heroTitle}>
					Je suis François Huszti, <span className={styles.spanJob}>développeur web fullstack,</span> et j'aimerai apporter ma pierre à votre édifice
				</h1>
				<section className={styles.heroButtons}>
					<Button path="/cv" value="Voir mon CV" type="secondary"/>
					<Button path="/cv-interactive" value="Accéder à mon CV interactif" type="primary"/>
				</section>
				<section className={styles.heroScrollLink}>
					<p>Résumé des mes compétences et projets</p>
					<DownSVG width="1em" height="1em"/>
				</section>
			</section>
			<aside className={styles.heroImages}>
				<CodeSVG className={styles.codeSvg}/>
				<img className={styles.avatarSvg} src="images/myAvatar.png" alt="C'est moi !" />
			</aside>
		</section>
	);
};

export default Hero;