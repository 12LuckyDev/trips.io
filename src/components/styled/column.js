import styled from "styled-components";

const Column = styled.div`
	display: flex;
	width: ${({ width }) => (!!width ? `${width}%` : "100%")};
	flex-direction: column;
	${({ border, theme }) =>
		border &&
		`
    border: solid 2px ${theme.colors.primary};
    padding: 1rem;
    `}
	${({ center }) => center && "align-items: center;"}
`;

export default Column;
