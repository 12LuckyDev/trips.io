import styled from "styled-components";

const Row = styled.div`
	display: flex;
	flex-wrap: wrap;

	${({ border, theme }) =>
		border &&
		`
    border: solid 2px ${theme.colors.primary};
    padding: 1rem;
    `}

	${({ height }) => height && `height: ${height};`}
`;

export default Row;
