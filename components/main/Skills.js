import React from 'react';
import styles from '../../scss/main/Skills.module.scss';
import BarChart from "../sub/bar_chart/BarChart";

const data = [
	["HTML5", { width: '90%', backgroundColor: 'blue' }],
	["HTML5", { width: '90%', backgroundColor: 'blue' }],
	["HTML5", { width: '90%', backgroundColor: 'blue' }],
	["HTML5", { width: '90%', backgroundColor: 'blue' }],
	["HTML5", { width: '90%', backgroundColor: 'blue' }],
	["HTML5", { width: '90%', backgroundColor: 'blue' }],
	["HTML5", { width: '90%', backgroundColor: 'blue' }],
	["HTML5", { width: '90%', backgroundColor: 'blue' }],
	["HTML5", { width: '90%', backgroundColor: 'blue' }],
	["HTML5", { width: '90%', backgroundColor: 'blue' }],
	["HTML5", { width: '90%', backgroundColor: 'blue' }],
];

const Skills = () => {
	return (
		<section id="skills" className={styles.skillsWrapper}>
			<BarChart/>
		</section>
	);
};

export default Skills;