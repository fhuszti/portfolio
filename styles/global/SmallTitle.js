import styled from "styled-components";
import colors from "../helpers/colors";

const SmallTitle = styled.h3`
	margin: ${props => props.margin};
	color: ${colors.white};
	text-transform: uppercase;
	font-size: 1.2rem;
	line-height: 1.25;
	letter-spacing: -0.025rem;
`;

SmallTitle.defaultProps = {
	margin: 0,
};

export default SmallTitle;