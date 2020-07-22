import styled from "styled-components";
import { BigTitle } from "../../../../global";
import colors from "../../../../helpers/colors";
import breakpoints from "../../../../helpers/breakpoints";

const Title = styled(BigTitle)`
	width: 90%;
	color: ${colors.white};

	.job {
		color: ${colors.text};
		font-weight: 600;
	}
	
	@media screen and (max-width: ${breakpoints.medium}) {
		width: 100%;
	}
`;

export default Title;