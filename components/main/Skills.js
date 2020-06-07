import React from 'react';
import styles from '../../scss/main/Skills.module.scss';
import BarChart from "../sub/bar_chart/BarChart";

const data = [
	["HTML5", { width: '90%', backgroundColor: '#ffce54' }],
	["CSS3", { width: '90%', backgroundColor: '#ac92ec' }],
	["JavaScript (incl. ES6)", { width: '82%', backgroundColor: '#5d9cec' }],
	["PHP (5,7)", { width: '83%', backgroundColor: '#ed5565' }],
	["MySQL", { width: '45%', backgroundColor: '#a0d468' }],
	["-----", { width: '0%', backgroundColor: 'rgba(0,0,0,0)' }],
	["React", { width: '78%', backgroundColor: '#4fc1e9' }],
	["React-Redux", { width: '57%', backgroundColor: '#ffce54' }],
	["Redux-Saga", { width: '30%', backgroundColor: '#ac92ec' }],
	["Phaser.js", { width: '60%', backgroundColor: '#5d9cec' }],
	["Next.js", { width: '30%', backgroundColor: '#ed5565' }],
	["Express.js", { width: '30%', backgroundColor: '#a0d468' }],
	["Twig", { width: '75%', backgroundColor: '#4fc1e9' }],
	["-----", { width: '0%', backgroundColor: 'rgba(0,0,0,0)' }],
	["Symfony", { width: '85%', backgroundColor: '#ffce54' }],
	["Doctrine", { width: '72%', backgroundColor: '#ac92ec' }],
];

const Skills = () => {
	return (
		<section id="skills" className={styles.skillsWrapper}>
			<h2 className={styles.title}>Competences:</h2>
			<BarChart data={data}/>
		</section>
	);
};

export default Skills;