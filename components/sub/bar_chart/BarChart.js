import React from 'react';
import styles from '../../../scss/sub/bar_chart/BarChart.module.scss';
import BronzeIcon from '../../../public/svg/bronze_medal.svg';
import SilverIcon from '../../../public/svg/silver_medal.svg';
import GoldIcon from '../../../public/svg/gold_medal.svg';
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
				<Level css={{ left: '30%' }}><BronzeIcon/></Level>
				<Level css={{ left: '60%' }}><SilverIcon/></Level>
				<Level css={{ left: '90%' }}><GoldIcon/></Level>
				
				{renderBars()}
			</section>
		</section>
	);
};

BarChart.defaultProp = {
	data: [],
}

export default BarChart;