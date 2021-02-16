import styled from "styled-components";

const StyledInput = styled.input`
  appearance: none;
  background: transparent;
  outline: none;
  width: calc(100% - 3rem);
  margin-left: 3rem;
  padding: 1rem 2rem;
  font-weight: bold;
  border: 3px solid transparent;
  color: ${({ theme }) => theme.colors.primary};
  border-bottom-color: ${({ theme }) => theme.colors.primary};

  transition: border-color 0.4s ease;

  &:focus {
    border-bottom-width: 2px;
    margin-bottom: 1px;
    backdrop-filter: invert(.1);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default StyledInput;
