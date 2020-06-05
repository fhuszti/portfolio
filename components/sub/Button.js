import React from "react";
import styles from '../../scss/sub/Button.module.scss';

const Button = ({ path, value, type, ...rest }) => {
	return (
		<a href={path} className={`${styles.button} ${styles[type]}`} {...rest}>{value}</a>
	);
};

export default Button;