import styled from "styled-components";
import colors from "../../helpers/colors";
import breakpoints from "../../helpers/breakpoints";

const Contact = styled.footer`
    padding: 50px 20px;
    background: radial-gradient(circle, ${colors.grey6} 0%, ${colors.grey3} 100%);
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    & p {
		color: #fff;
		font-weight: 600;
		letter-spacing: 0.15em;
	}
	
	@media screen and (max-width: ${breakpoints.medium}) {
		padding: 50px 20px;
		min-height: 150px;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		
		:nth-child(1) {
			order: 2;
		}
		:nth-child(2) {
			order: 1;
		}
		:nth-child(3) {
			order: 3;
		}
	}
`;

export default Contact;