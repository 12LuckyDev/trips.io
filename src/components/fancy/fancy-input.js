import React from "react";
import { CustomInput } from "@custom-components";
import { StyledInput, StyledLabel, StyledLabelText } from "@styled-components";

const FancyInput = (props) => {
  return (
    <CustomInput
      labelComponent={StyledLabel}
      inputComponent={StyledInput}
      labelTextComponent={StyledLabelText}
      {...props}
    />
  );
};

export default FancyInput;
