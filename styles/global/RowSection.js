import styled from "styled-components";

const RowSection = styled.section`
	margin: ${props => props.margin};
	display: flex;
	justify-content: space-evenly;
	align-items: flex-start;
	flex-wrap: wrap;
`;

RowSection.defaultProps = {
	margin: 0,
};

export default RowSection;