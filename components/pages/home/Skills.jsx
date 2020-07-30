import React from 'react';
import Link from "next/link";
import { Button, ButtonsRow, RowSection, SmallTitle, Text, Title } from "../../../styles/global";
import { Container } from "../../../styles/components/pages/home/Skills";
import SkillCard from "../../SkillCard";
import colors from "../../../styles/helpers/colors";

const Skills = () => {
	return (
		<Container id="skills">
			<Title color={colors.white} data-aos="fade-right" data-aos-once={true} data-aos-easing="ease-in" data-aos-duration="300">Competences:</Title>
			
			<RowSection margin="1rem 1rem 2rem 1rem">
				<SkillCard image="images/homepage/html.png">
					<SmallTitle margin="0 0 0.5rem 0">Partant des bases</SmallTitle>
					<Text color={colors.text}>
						J'ai commencé par le début, soit le <span class="bold">HTML5</span>, le <span class="bold">CSS3</span> et
						le <span class="bold">JavaScript</span> ainsi que le <span class="bold">PHP</span> et
						quelques bases de <span class="bold">MySQL</span>, le tout en auto-didacte.<br/>
						J'y ai vite ajouté une pincée de <span class="bold">BootStrap</span>, <span class="bold">jQuery</span>,
						puis <span class="bold">SCSS</span>.
					</Text>
				</SkillCard>
				<SkillCard image="images/homepage/react.png">
					<SmallTitle margin="0 0 0.5rem 0">à la sphère React</SmallTitle>
					<Text color={colors.text}>
						J'ai vite accroché avec <span class="bold">React</span> et tout son écosystème,
						incluant <span class="bold">React-Redux</span>, <span class="bold">Redux-Saga</span> ou
						encore <span class="bold">Next.js</span> entre autres, ainsi que la découverte du CSS-in-JS
						avec <span class="bold">Styled-Components</span>.
					</Text>
				</SkillCard>
				<SkillCard image="images/homepage/symfony.png">
					<SmallTitle margin="0 0 0.5rem 0">passant par Symfony</SmallTitle>
					<Text color={colors.text}>
						Mon premier amour reste <span class="bold">Symfony</span> et ce qui en découle. A sa suite,
						l'inévitable <span class="bold">Doctrine</span>, ainsi que l'outil bien pratique
						qu'est <span className="bold">API-Platform</span>. J'ai aussi appris à travailler avec <span class="bold">Twig</span>.
					</Text>
				</SkillCard>
			</RowSection>
			
			<ButtonsRow data-aos="fade-up" data-aos-once={true} data-aos-easing="ease-in" data-aos-duration="300">
				<Link href="/cv" passHref>
					<Button title="Voir mon CV" smaller secondary>Voir mon CV</Button>
				</Link>
				<Link href="/cv-interactive" passHref>
					<Button title="Accéder à mon CV interactif" smaller secondary>Accéder à mon CV interactif</Button>
				</Link>
			</ButtonsRow>
		</Container>
	);
};

export default Skills;