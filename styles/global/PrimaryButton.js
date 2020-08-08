import styled from "styled-components";
import Button from "./Button";
import colors from "../helpers/colors";

const PrimaryButton = styled(Button)`
	background-color: ${colors.main};
	font-size: 1.1rem;
	
	&:hover {
		background-color: ${colors.mainDark};
	}
`;

export default PrimaryButton;