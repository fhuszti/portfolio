import styled from "styled-components";
import breakpoints from "../../../../helpers/breakpoints";

const Images = styled.aside`
	width: 50%;
	position: relative;
	
	.codeSvg {
		height: 50%;
		width: 80%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-70%);
		opacity: 0.5;
	}
	.avatarFigure {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		height: 50%;
		
		img {
			height: 100%;
		}
	}
	
	@media screen and (max-width: ${breakpoints.large}) {
		.avatarFigure {
			height: 45%;
		}
	}
	
	@media screen and (max-width: ${breakpoints.medium}) {
		display: none;
	}
`;

export default Images;