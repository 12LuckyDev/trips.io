import IcoBase from "../ico-base";
import { StyledIcoButton } from "@styled-components";
import styled, { css } from "styled-components";

const StyledNextButton = styled(StyledIcoButton)`
	${({ absolute }) =>
		absolute &&
		css`
			position: absolute;
			top: calc(50% - 3.1rem);
			right: 0;
		`}
`;

const NextButton = ({ absolute, hide, name = "next", ...props }) => (
	<IcoBase
		name={name}
		component={StyledNextButton}
		componentProps={{ absolute, hide }}
		{...props}
	>
		&#10095;
	</IcoBase>
);

export default NextButton;
