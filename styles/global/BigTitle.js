import styled from "styled-components";
import colors from "../helpers/colors";
import breakpoints from "../helpers/breakpoints";

const BigTitle = styled.h1`
	color: ${props => props.color};
	width: ${props => props.width};
	font-size: 3rem;
	line-height: 1.25;
	letter-spacing: -0.025rem;
	
	@media (max-width: ${breakpoints.large}) {
		font-size: 2.5rem;
	}
	
	@media (max-width: ${breakpoints.medium}) {
		font-size: 2rem;
	}
`;

BigTitle.defaultProps = {
	color: colors.title,
	width: '100%',
};

export default BigTitle;