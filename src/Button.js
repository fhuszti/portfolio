import React from "react";
import {Link} from "react-router-dom";

const Button = props => {
	const { path, value, classNames } = props;
	return (
		<Link to={path} className={`button ${classNames}`} {...props}>{value}</Link>
	);
};

export default Button;