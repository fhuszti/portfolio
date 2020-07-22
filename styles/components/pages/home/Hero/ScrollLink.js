import styled from "styled-components";
import colors from "../../../../helpers/colors";
import breakpoints from "../../../../helpers/breakpoints";
import { bounce } from "../../../../helpers/keyframes";
import spacing from "../../../../helpers/spacing";

const ScrollLink = styled.a`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: hsla(0, 0%, 100%, 0.8);
	fill: ${colors.white};
	text-decoration: none;
	
	svg {
		margin-top: ${spacing.small};
		animation: ${bounce} 0.5s infinite alternate;
	}
	
	@media screen and (max-width: ${breakpoints.medium}) {
		color: ${colors.text};
		fill: ${colors.text};
	}
`;

export default ScrollLink;