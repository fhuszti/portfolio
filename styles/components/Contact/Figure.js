import styled from "styled-components";
import breakpoints from "../../helpers/breakpoints";

const Figure = styled.figure`
	&:hover {
		background-color: rgba(200, 200, 200, 0.05);
	}
	
	& img {
		max-height: 50px;
	}
	
	@media screen and (max-width: ${breakpoints.medium}) {
		& img {
			max-height: 30px;
		}
	}
	
`;

export default Figure;