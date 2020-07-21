import styled from "styled-components";
import colors from "../../../../helpers/colors";
import breakpoints from "../../../../helpers/breakpoints";
import spacing from "../../../../helpers/spacing";

const Contact = styled.footer`
    padding: ${spacing.xlarge} ${spacing.medium};
    background: radial-gradient(circle, ${colors.grey} 0%, ${colors.greyDark} 100%);
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    > section > p {
		font-weight: 600;
		letter-spacing: 0.15rem;
		cursor: pointer;
	}
	
	@media screen and (max-width: ${breakpoints.medium}) {
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: ${spacing.large} ${spacing.medium};
		
		.footerChild:nth-child(1) {
			order: 1;
		}
		.footerChild:nth-child(2) {
			order: 3;
		}
		.footerChild:nth-child(3) {
			order: 2;
			margin: ${spacing.medium} 0;
		}
	}
`;

export default Contact;