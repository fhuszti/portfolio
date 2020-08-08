import React from 'react';
import Link from "next/link";
import { ButtonsRow, RowSection, SecondaryButton, SmallTitle, Text, Title } from "../../../styles/global";
import { Container } from "../../../styles/components/pages/home/Skills";
import SkillCard from "../../SkillCard";
import colors from "../../../styles/helpers/colors";

const Skills = () => {
	return (
		<Container id="skills">
			<Title color={colors.white} data-aos="fade-right" data-aos-once={true} data-aos-easing="ease-in" data-aos-duration="300">Competences:</Title>
			
			<RowSection margin="1rem 1rem 0 1rem">
				<SkillCard image="images/homepage/html.png">
					<SmallTitle margin="0 0 0.5rem 0">Partant des bases</SmallTitle>
					<Text color={colors.text}>
						J'ai commencé par le début, soit le <span className="bold">HTML5</span>, le <span className="bold">CSS3</span> et
						le <span className="bold">JavaScript</span> ainsi que le <span className="bold">PHP</span> et
						quelques bases de <span className="bold">MySQL</span>, le tout en auto-didacte.<br/>
						J'y ai vite ajouté une pincée de <span className="bold">BootStrap</span>, <span className="bold">jQuery</span>,
						puis <span className="bold">SCSS</span>.
					</Text>
				</SkillCard>
				<SkillCard image="images/homepage/react.png">
					<SmallTitle margin="0 0 0.5rem 0">à la sphère React</SmallTitle>
					<Text color={colors.text}>
						J'ai vite accroché avec <span className="bold">React</span> et tout son écosystème,
						incluant <span className="bold">React-Redux</span>, <span className="bold">Redux-Saga</span> ou
						encore <span className="bold">Next.js</span> entre autres, ainsi que la découverte du CSS-in-JS
						avec <span className="bold">Styled-Components</span>.
					</Text>
				</SkillCard>
				<SkillCard image="images/homepage/symfony.png">
					<SmallTitle margin="0 0 0.5rem 0">passant par Symfony</SmallTitle>
					<Text color={colors.text}>
						Mon premier amour reste <span className="bold">Symfony</span> et ce qui en découle. A sa suite,
						l'inévitable <span className="bold">Doctrine</span>, ainsi que l'outil bien pratique
						qu'est <span className="bold">API-Platform</span>. J'ai aussi appris à travailler avec <span className="bold">Twig</span>.
					</Text>
				</SkillCard>
			</RowSection>
		</Container>
	);
};

export default Skills;