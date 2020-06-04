import React from "react";
import styles from '../../scss/sub/Button.module.scss';

const Button = props => {
	const { path, value, type } = props;
	return (
		<a href={path} className={`${styles.button} ${styles[type]}`} {...props}>{value}</a>
	);
};

export default Button;