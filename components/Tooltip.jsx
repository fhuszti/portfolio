import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from "../styles/components/Tooltip";

const Tooltip = ({ children, coords }) => {
	return ReactDOM.createPortal(
		<Container top={coords.top} left={coords.left}>
			{children}
		</Container>,
		document.querySelector("#portalRoot")
	);
};

export default Tooltip;