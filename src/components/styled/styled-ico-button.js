import styled, { css } from "styled-components";
import { colorMix } from "@utils";

const StyledIcoButton = styled.a`
	cursor: pointer;
	line-height: 3rem;
	font-size: 3rem;
	font-weight: bold;
	padding: 1.6rem;
	user-select: none;
	height: 6.2rem;

	${({ hide }) => hide && "display: none;"}
	${({ disabled, theme }) =>
		disabled
			? `color: ${colorMix(theme.colors.primary, theme.colors.secondary)};`
			: css`
					&:hover {
						background-color: rgba(0, 0, 0, 0.8);
					}
			  `}
`;

export default StyledIcoButton;
