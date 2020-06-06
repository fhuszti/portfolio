import React from 'react';
import styles from '../../../scss/sub/bar_chart/BarChart.module.scss';
import Level from "./Level";
import Bar from "./Bar";

const BarChart = () => {
	return (
		<section className={styles.barchartWrapper}>
			<section className={styles.labels}>
				<p className={styles.label}>HTML5</p>
				<p className={styles.label}>CSS3</p>
				<p className={styles.label}>JavaScript (incl. ES6)</p>
				<p className={styles.label}>PHP (5,7)</p>
				<p className={styles.label}>MySQL</p>
			</section>
			<section className={styles.bars}>
				<Level label="J'ai les bases" css={{ left: '30%' }}/>
				<Level label="Je connais bien" css={{ left: '60%' }}/>
				<Level label="Je maîtrise" css={{ left: '90%' }}/>
				
				<Bar css={{ width: '90%', backgroundColor: 'blue' }}/>
				<Bar css={{ width: '90%', backgroundColor: 'red' }}/>
				<Bar css={{ width: '72%', backgroundColor: 'yellow' }}/>
				<Bar css={{ width: '76%', backgroundColor: 'green' }}/>
				<Bar css={{ width: '55%', backgroundColor: 'violet' }}/>
			</section>
		</section>
	);
};

export default BarChart;