import styled from "styled-components";
import breakpoints from "../helpers/breakpoints";

const RowThenColumnSection = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	
	@media screen and (max-width: ${breakpoints.small}) {
		flex-direction: column;
	}
`;

export default RowThenColumnSection;