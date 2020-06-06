import React from 'react';
import styles from '../../scss/main/Skills.module.scss';
import BarChart from "../sub/bar_chart/BarChart";

const Skills = () => {
	return (
		<section id="skills" className={styles.skillsWrapper}>
			<BarChart/>
		</section>
	);
};

export default Skills;