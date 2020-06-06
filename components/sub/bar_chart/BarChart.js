import React from 'react';
import styles from '../../../scss/sub/bar_chart/BarChart.module.scss';
import Level from "./Level";
import Bar from "./Bar";

const BarChart = ({ data }) => {
	const labels = data.map(elmt => elmt[0]);
	const bars = data.map(elmt => elmt[1]);

	const renderLabels = () => labels.map((label, i) => <p key={label + i} className={styles.label}>{label}</p>);
	const renderBars = () => bars.map((css, i) => <Bar key={i} css={css}/>);

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

BarChart.defaultProp = {
	data: [],
}

export default BarChart;