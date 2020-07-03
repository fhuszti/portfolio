import React from 'react';
import styles from '../../scss/main/Projects.module.scss';

const Projects = () => {
	return (
		<section className={styles.projectsWrapper}>
			<h2 className={styles.title} data-aos="fade-right" data-aos-once={true} data-aos-easing="ease-in" data-aos-duration="300">Projets:</h2>
			<section className={styles.cards}>

			</section>
		</section>
	);
};

export default Projects;