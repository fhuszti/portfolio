import React from 'react';
import styles from '../../../scss/sub/bar_chart/Bar.module.scss';

const Bar = ({ css }) => {
	return <div className={styles.bar} style={css}/>;
};

export default Bar;