import styled from "styled-components";
import breakpoints from "../../helpers/breakpoints";

const Figure = styled.figure`
	transition: background-color 0.2s linear;

	&:hover {
		background-color: hsla(120, 3%, 45%, 0.25); //colors.grey
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