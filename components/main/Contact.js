import React from 'react';
import styles from '../../scss/main/Contact.module.scss';

const Contact = () => {
	return (
		<section className={styles.contactWrapper}>
			<figure className={styles.contactFigure}>
				<a href="https://github.com/fhuszti" title="Mon profil GitHub" target="_blank">
					<img src="images/github.png" alt="GitHub"/>
				</a>
			</figure>
			<p>f.huszti@gmail.com</p>
			<figure className={styles.contactFigure}>
				<a href="https://www.linkedin.com/in/francoishuszti/" title="Mon profil LinkedIn" target="_blank">
					<img src="images/linkedin.png" alt="LinkedIn"/>
				</a>
			</figure>
		</section>
	);
};

export default Contact;