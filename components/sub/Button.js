import React from "react";
import styles from '../../scss/sub/Button.module.scss';

const Button = ({ path, value, type, css, classNames, ...rest }) => {
	return (
		<a href={path} className={`${styles.button} ${styles[type]} ${classNames}`} style={css} {...rest}>{value}</a>
	);
};

export default Button;