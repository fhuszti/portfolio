import styled from "styled-components";
import spacing from "../../helpers/spacing";
import colors from "../../helpers/colors";

const Container = styled.section`
	text-align: center;
	padding: ${spacing.small};
	background-color: ${colors.grey};
	color: ${colors.white};
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
	border-radius: 10px;
	position: absolute;
	top: ${props => props.top - 10}px;
	left: ${props => props.left}px;
	transform: translate(-50%, -100%);
	width: 200px;
	
	.tooltipArrow {
		width: 0.5rem;
		height: 0.5rem;
		background-color: ${colors.grey};
		border-right: 1px solid ${colors.greyDark};
		border-bottom: 1px solid ${colors.greyDark};
		position: absolute;
		bottom: -0.25rem;
		left: 50%;
		transform: translateX(-50%) rotate(45deg);
	}
`;

Container.defaultProps = {
	top: 0,
	left: 0,
}

export default Container;