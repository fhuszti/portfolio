import React from 'react';
import styles from '../../../scss/sub/bar_chart/Entry.module.scss';
import Bar from "./Bar";

const Entry = ({ label, percentage, color }) => {
	return (
		<section className={styles.entryWrapper}>
			<p className={styles.label}>{label}</p>
			<Bar css={{ width: percentage, backgroundColor: color }}/>
		</section>
	);
};

export default Entry;