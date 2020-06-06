import React from 'react';
import styles from '../../../scss/sub/bar_chart/Level.module.scss';

const Level = ({ label, css }) => {
	return (
		<section className={styles.levelWrapper} style={css}>
			<p className={styles.label}>{label}</p>
			<div className={styles.line}/>
		</section>
	);
};

export default Level;