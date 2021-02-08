import React from "react";
import { CustomButton } from "@custom-components";
import styled from "styled-components";

const StyledButton = styled.button`
  background: red;
  color: blue;
`;

const FancyButton = (props) => {
  return <CustomButton {...props} component={StyledButton} />;
};

export default FancyButton;
