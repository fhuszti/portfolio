import styled from "styled-components";
import Button from "./Button";
import colors from "../helpers/colors";

const SecondaryButton = styled(Button)`
	border: 1px solid ${props => props.color};
	background-color: hsla(0, 0, 100%, 0); //transparent
	font-size: 1rem;
	
	&:hover {
		background-color: hsla(120, 3%, 45%, 0.25); //colors.grey
	}
`;

SecondaryButton.defaultProps = {
	margin: 0,
	color: colors.white,
};

export default SecondaryButton;