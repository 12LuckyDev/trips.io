import styled from "styled-components";
import { colorMix } from "@utils";

const StyledButton = styled.button`
  appearance: none;
  width: 20rem;
  max-width: 100%;
  padding: 0.75rem 2rem;
  outline: none;
  border: 3px solid;
  border-radius: 1.5rem;
  background-color: transparent;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};

  transition: background-color 0.4s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:active {
    background-color: ${({ theme }) =>
      colorMix(theme.colors.primary, theme.colors.secondary)};
  }
`;

export default StyledButton;
