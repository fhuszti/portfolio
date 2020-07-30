import styled from "styled-components";
import breakpoints from "../helpers/breakpoints";
import RowThenColumnSection from "./RowThenColumnSection";

const ButtonsRow = styled(RowThenColumnSection)`
	align-items: center;

	> a:first-child {
		margin-right: 1rem;
	}
	
	@media screen and (max-width: ${breakpoints.small}) {
		> a:first-child {
			margin-right: 0;
			margin-bottom: 1rem;
		}
	}
`;

export default ButtonsRow;