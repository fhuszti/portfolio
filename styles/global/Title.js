import styled from "styled-components";
import colors from "../helpers/colors";
import fonts from "../helpers/fonts";

const Title = styled.h2`
	color: ${colors.white};
	font-family: ${fonts.title};
	text-transform: uppercase;
	font-size: 1.5rem;
	line-height: 1.25;
	letter-spacing: -0.025rem;
`;

export default Title;