import React from "react";
import { CustomButton } from "@custom-components";
import { StyledButton } from "@styled-components";

const FancyButton = ({ selected, ...props }) => {
  return (
    <CustomButton
      {...props}
      component={StyledButton}
      componentProps={{ selected }}
    />
  );
};

export default FancyButton;
