import React from 'react';
import Chart from "react-google-charts";
import styles from '../../scss/main/Skills.module.scss';

const Skills = () => {
	return (
		<section id="skills" className={styles.skillsWrapper}>
			<Chart
				width={'500px'}
				height={'300px'}
				chartType="BarChart"
				loader={<div>Chargement du graph des compétences...</div>}
				data={[
					['Techno', 'Niveau'],
					['HTML5', "Je maîtrise"],
					['CSS3', "Je maîtrise"],
					['JavaScript', "Je connais bien"],
					['PHP', "Je connais bien"],
					['MySQL', "J'en ai fait un peu"],
				]}
				options={{
					title: 'Mes compétences',
					chartArea: { width: '50%' },
					hAxis: {
						title: 'Niveau',
						minValue: 'Jamais entendu parler',
					},
					vAxis: {
						title: 'Technologies',
					},
				}}
			/>
		</section>
	)
};

export default Skills;