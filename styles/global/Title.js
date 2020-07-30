import styled from "styled-components";
import colors from "../helpers/colors";
import fonts from "../helpers/fonts";

const Title = styled.h2`
	color: ${props => props.color};
	font-family: ${fonts.title};
	text-transform: uppercase;
	font-size: 1.5rem;
	line-height: 1.25;
	letter-spacing: -0.025rem;
`;

Title.defaultProps = {
	color: colors.title,
};

export default Title;