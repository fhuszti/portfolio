import styled, { css } from 'styled-components';
import colors from "../helpers/colors";
import spacing from "../helpers/spacing";

const Button = styled.a`
	margin: ${props => props.margin};
	
	padding: ${spacing.medium} ${spacing.large};
	text-decoration: none;
	border-radius: 100px;
	font-size: 1rem;
	line-height: 1.25;
	font-weight: 400;
	color: ${colors.white};
	box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.18);
	transition: background-color 0.2s linear;
	
	${({ primary }) =>
		primary &&
		css`
			background-color: ${colors.main};
			font-size: 1.1rem;
			
			&:hover {
				background-color: ${colors.mainDark};
			}
		`
	};
	
	${({ secondary }) =>
		secondary &&
		css`
			border: 1px solid ${colors.white};
			background-color: hsla(0, 0, 100%, 0);
			font-size: 1rem;
			
			&:hover {
				background-color: hsla(120, 3%, 45%, 0.25); //colors.grey
			}
		`
	};
	
	${({ smaller }) =>
		smaller &&
		css`
			padding: ${spacing.small} ${spacing.medium};
		`
	};
`;

Button.defaultProps = {
	margin: 0,
};

export default Button;