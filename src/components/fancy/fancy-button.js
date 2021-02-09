import React from "react";
import { CustomButton } from "@custom-components";
import { StyledButton } from "@styled-components";

const FancyButton = (props) => {
  return <CustomButton {...props} component={StyledButton} />;
};

export default FancyButton;
