import React from 'react';
import styles from '../../scss/main/Skills.module.scss';
import BarChart from "../sub/bar_chart/BarChart";

const data = [
	["HTML5", { width: '90%', backgroundColor: '#004800' }],
	["CSS3", { width: '90%', backgroundColor: '#145714' }],
	["JavaScript (incl. ES6)", { width: '82%', backgroundColor: '#286628' }],
	["PHP (5,7)", { width: '83%', backgroundColor: '#3a733a' }],
	["MySQL", { width: '45%', backgroundColor: '#518451' }],
	["-----", { width: '0%', backgroundColor: 'rgba(0,0,0,0)' }],
	["React", { width: '78%', backgroundColor: '#6b966b' }],
	["React-Redux", { width: '57%', backgroundColor: '#84a884' }],
	["Redux-Saga", { width: '30%', backgroundColor: '#99b799' }],
	["Phaser.js", { width: '60%', backgroundColor: '#a9c2a9' }],
	["Next.js", { width: '30%', backgroundColor: '#bcd0bc' }],
	["Express.js", { width: '30%', backgroundColor: '#cfddcf' }],
	["Twig", { width: '75%', backgroundColor: '#dde7dd' }],
	["-----", { width: '0%', backgroundColor: 'rgba(0,0,0,0)' }],
	["Symfony", { width: '85%', backgroundColor: '#ebf1eb' }],
	["Doctrine", { width: '72%', backgroundColor: '#ffffff' }],
];

const Skills = () => {
	return (
		<section id="skills" className={styles.skillsWrapper}>
			<BarChart data={data}/>
		</section>
	);
};

export default Skills;