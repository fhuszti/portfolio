import styled from "styled-components";
import breakpoints from "../../../../helpers/breakpoints";
import spacing from "../../../../helpers/spacing";

const Buttons = styled.section`
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	
	a:first-child {
		margin-bottom: ${spacing.medium};
	}
	
	@media screen and (max-width: ${breakpoints.medium}) {
		align-items: center;
		width: 100%;
		
		a:first-child {
			margin-bottom: ${spacing.medium};
		}
	}
	
	@media screen and (max-width: ${breakpoints.small}) {
		margin: ${spacing.medium} 0;
	}
`;

export default Buttons;