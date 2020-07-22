import React from 'react';
import Link from "next/link";
import DownSVG from "../../../public/svg/down-arrow.svg";
import CodeSVG from "../../../public/svg/code.svg";
import { Button } from "../../../styles/global";
import { Buttons, Container, Content, Images, ScrollLink, Title } from "../../../styles/components/pages/home/Hero";

const Hero = () => {
	return (
		<Container>
			<Content>
				<div className="just-here-to-align-flex"/>
				<Title data-aos="fade-down" data-aos-once={true} data-aos-easing="ease-in" data-aos-duration="300">
					Je suis François Huszti, <span className="job">développeur web fullstack,</span> et je souhaite apporter ma pierre à votre édifice
				</Title>
				<Buttons data-aos="fade-right" data-aos-once={true} data-aos-easing="ease-in" data-aos-duration="300">
					<Link href="/cv" passHref>
						<Button title="Voir mon CV" secondary bigger>Voir mon CV</Button>
					</Link>
					<Link href="/cv-interactive" passHref>
						<Button title="Accéder à mon CV interactif" primary bigger>Accéder à mon CV interactif</Button>
					</Link>
				</Buttons>
				<section data-aos="fade-up" data-aos-once={true} data-aos-easing="ease-in" data-aos-duration="300" data-aos-anchor-placement="top-bottom">
					<ScrollLink href="#skills">
						<p>Mes compétences et projets</p>
						<DownSVG width="1rem" height="1rem"/>
					</ScrollLink>
				</section>
			</Content>
			<Images data-aos="fade-up" data-aos-once={true} data-aos-easing="ease-in" data-aos-duration="300">
				<CodeSVG className="codeSvg"/>
				<figure className="avatarFigure"><img className="avatarSvg" src="images/myAvatar.png" alt="Un avatar me représentant" /></figure>
			</Images>
		</Container>
	);
};

export default Hero;