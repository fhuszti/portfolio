import styled from "styled-components";
import colors from "../helpers/colors";

const Text = styled.p`
	color: ${props => props.color};
	font-size: 18px;
	line-height: 1.5;
	font-weight: 400;
`;

Text.defaultProps = {
	color: colors.text,
};

export default Text;