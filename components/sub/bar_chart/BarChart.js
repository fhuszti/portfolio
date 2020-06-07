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
				{renderLabels()}
			</section>
			<section className={styles.bars}>
				<Level label="Débutant" css={{ left: '30%' }}/>
				<Level label="Je connais bien" css={{ left: '60%' }}/>
				<Level label="Je maîtrise" css={{ left: '90%' }}/>
				
				{renderBars()}
			</section>
		</section>
	);
};

BarChart.defaultProp = {
	data: [],
}

export default BarChart;