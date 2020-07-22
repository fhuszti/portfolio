import styled from "styled-components";
import colors from "../../../../helpers/colors";

const Container = styled.section`
	min-height: 100vh;
	width: 100%;
	display: flex;
	background: linear-gradient(to right bottom, ${colors.main} 0%, ${colors.gradient1} 40%, ${colors.gradient2} 55%, ${colors.gradient3} 75%, ${colors.white} 100%);
`;

export default Container;