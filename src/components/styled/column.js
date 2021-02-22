import styled from "styled-components";

const Column = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  ${({ border, theme }) =>
    border &&
    `
    border: solid 2px ${theme.colors.primary};
    padding: 1rem;
    `}
`;

export default Column;
