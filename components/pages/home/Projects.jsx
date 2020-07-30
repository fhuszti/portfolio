import React from 'react';
import { Container } from "../../../styles/components/pages/home/Projects";
import { Button, ButtonsRow, Title } from "../../../styles/global";
import Link from "next/link";
import colors from "../../../styles/helpers/colors";

const Projects = () => {
	return (
		<Container>
			<Title data-aos="fade-right" data-aos-once={true} data-aos-easing="ease-in" data-aos-duration="300">Projets:</Title>
			
			<ButtonsRow data-aos="fade-up" data-aos-once={true} data-aos-easing="ease-in" data-aos-duration="300">
				<Link href="/cv" passHref>
					<Button color={colors.greyDark} secondaryColor={colors.greyDark} title="Voir mon CV" smaller secondary>Voir mon CV</Button>
				</Link>
				<Link href="/cv-interactive" passHref>
					<Button color={colors.greyDark} secondaryColor={colors.greyDark} title="Accéder à mon CV interactif" smaller secondary>Accéder à mon CV interactif</Button>
				</Link>
			</ButtonsRow>
		</Container>
	);
};

export default Projects;