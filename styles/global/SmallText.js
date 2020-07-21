import styled from "styled-components";
import Text from "./Text";
import colors from "../helpers/colors";

const SmallText = styled(Text)`
	color: ${props => props.color};
	font-size: 14px;
`;

SmallText.defaultProps = {
	color: colors.text,
};

export default SmallText;