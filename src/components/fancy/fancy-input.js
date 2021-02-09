import React from "react";
import { CustomInput } from "@custom-components";
import { StyledInput, StyledLabel } from "@styled-components";

const FancyInput = (props) => {
  return (
    <CustomInput
      labelComponent={StyledLabel}
      inputComponent={StyledInput}
      {...props}
    />
  );
};

export default FancyInput;
