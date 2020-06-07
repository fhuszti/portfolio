import React from 'react';
import styles from '../../../scss/sub/bar_chart/Level.module.scss';

const Level = ({ children, css }) => {
	return (
		<section className={styles.levelWrapper} style={css}>
			<p className={styles.label}>{children}</p>
			<div className={styles.line}/>
		</section>
	);
};

export default Level;