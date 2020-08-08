import styled, { css } from 'styled-components';
import colors from "../helpers/colors";
import spacing from "../helpers/spacing";

const Button = styled.a`
	margin: ${props => props.margin};
	color: ${props => props.color};
	
	padding: ${spacing.medium} ${spacing.large};
	text-decoration: none;
	border-radius: 100px;
	font-size: 1rem;
	line-height: 1.25;
	font-weight: 400;
	transition: background-color 0.2s linear;
	
	${({ smaller }) =>
		smaller &&
		css`
			padding: ${spacing.small} ${spacing.medium};
		`
	};
`;

Button.defaultProps = {
	margin: 0,
	color: colors.white,
};

export default Button;