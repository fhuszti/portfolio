import styled from "styled-components";
import spacing from "../../../../helpers/spacing";
import breakpoints from "../../../../helpers/breakpoints";

const Content = styled.section`
	width: 50%;
	padding: ${spacing.medium};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	
	@media screen and (max-width: ${breakpoints.medium}) {
		width: 100%;
		text-align: center;
	}
`;

export default Content;