import IcoBase from "../ico-base";
import { StyledIcoButton } from "@styled-components";
import styled, { css } from "styled-components";

const StyledPrevButton = styled(StyledIcoButton)`
	${({ absolute }) =>
		absolute &&
		css`
			position: absolute;
			top: calc(50% - 3.1rem);
		`}
`;

const PrevButton = ({ absolute, hide, name = "prev", ...props }) => (
	<IcoBase
		name={name}
		component={StyledPrevButton}
		componentProps={{ absolute, hide }}
		{...props}
	>
		&#10094;
	</IcoBase>
);

export default PrevButton;
