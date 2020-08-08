import React from 'react';
import { Container } from "../../../styles/components/pages/home/Projects";
import { ButtonsRow, SecondaryButton, Title } from "../../../styles/global";
import Link from "next/link";
import colors from "../../../styles/helpers/colors";

const Projects = () => {
	return (
		<Container>
			<Title data-aos="fade-right" data-aos-once={true} data-aos-easing="ease-in" data-aos-duration="300">Projets:</Title>
			
			<ButtonsRow data-aos="fade-up" data-aos-once={true} data-aos-easing="ease-in" data-aos-duration="300">
				<Link href="/cv" passHref>
					<SecondaryButton color={colors.greyDark} title="Voir mon CV" smaller>Voir mon CV</SecondaryButton>
				</Link>
				<Link href="/cv-interactive" passHref>
					<SecondaryButton color={colors.greyDark} title="Accéder à mon CV interactif" smaller>Accéder à mon CV interactif</SecondaryButton>
				</Link>
			</ButtonsRow>
		</Container>
	);
};

export default Projects;