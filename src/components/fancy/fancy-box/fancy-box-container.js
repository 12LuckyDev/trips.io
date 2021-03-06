import styled from "styled-components";
import { px2vw } from "@utils";

const FancyBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;
`;

export default FancyBoxContainer;
