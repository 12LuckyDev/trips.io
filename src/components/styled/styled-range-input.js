import styled, { css } from "styled-components";

const StyledRangeInput = styled.input`
	background: ${({ theme }) => theme.colors.primary};
	outline: none;
	width: calc(100% - 6rem);
	${({ margin = true }) =>
		margin
			? css`
					margin: 0 3rem;
					width: calc(100% - 6rem);
			  `
			: css`
					width: 100%;
			  `}
	${({ flip }) => flip && "transform: rotateY(180deg);"}
	color: ${({ theme }) => theme.colors.primary};
`;

export default StyledRangeInput;
