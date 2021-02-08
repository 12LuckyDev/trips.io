import styled from "styled-components";
import { px2vw } from "@utils";

const FancyBoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export default FancyBoxText;
