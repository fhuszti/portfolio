import styled from "styled-components";

const Container = styled.article`
	width: 300px;
	margin: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	
	> img {
		max-height: 100px;
		margin-bottom: 1rem;
	}
`;

export default Container;