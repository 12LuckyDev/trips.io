import IcoBase from "../ico-base";
import { StyledIcoButton } from "@styled-components";
import styled from "styled-components";

const StyledCancelButton = styled(StyledIcoButton)`
	position: absolute;
	right: 0;
`;

const CancelButton = (props) => (
	<IcoBase component={StyledCancelButton} {...props}>
		&#128473;
	</IcoBase>
);

export default CancelButton;
