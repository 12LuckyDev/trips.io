import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;

    @media (min-width: 768px) {
    }

    @media (min-width: 1024px) {
    }
  }

  body {
    font-size: 14px;
    font-size: 1.6rem;
  }
`;

export default Global;
