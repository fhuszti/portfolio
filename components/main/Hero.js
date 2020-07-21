import React from 'react';
import Link from "next/link";
import styles from '../../scss/main/Hero.module.scss';
import DownSVG from "../../public/svg/down-arrow.svg";
import CodeSVG from "../../public/svg/code.svg";
import { Button } from "../../styles/global";

const Hero = () => {
	return (
		<section className={styles.hero}>
			<section className={styles.heroDisplay}>
				<div className="just-here-to-align-flex"/>
				<h1 className={styles.heroTitle} data-aos="fade-down" data-aos-once={true} data-aos-easing="ease-in" data-aos-duration="300">
					Je suis François Huszti, <span className={styles.spanJob}>développeur web fullstack,</span> et je souhaite apporter ma pierre à votre édifice
				</h1>
				<section className={styles.heroButtons} data-aos="fade-right" data-aos-once={true} data-aos-easing="ease-in" data-aos-duration="300">
					<Link href="/cv" passHref>
						<Button title="Voir mon CV" secondary bigger margin="0 0 30px">Voir mon CV</Button>
					</Link>
					<Link href="/cv-interactive" passHref>
						<Button title="Accéder à mon CV interactif" primary bigger>Accéder à mon CV interactif</Button>
					</Link>
				</section>
				<section className={styles.heroScrollSection} data-aos="fade-up" data-aos-once={true} data-aos-easing="ease-in" data-aos-duration="300" data-aos-anchor-placement="top-bottom">
					<a href="#skills" className={styles.heroScrollLink}>
						<p>Mes compétences et projets</p>
						<DownSVG width="1em" height="1em"/>
					</a>
				</section>
			</section>
			<aside className={styles.heroImages} data-aos="fade-up" data-aos-once={true} data-aos-easing="ease-in" data-aos-duration="300">
				<CodeSVG className={styles.codeSvg}/>
				<img className={styles.avatarSvg} src="images/myAvatar.png" alt="C'est moi !" />
			</aside>
		</section>
	);
};

export default Hero;