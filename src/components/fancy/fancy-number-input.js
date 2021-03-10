import React from "react";
import { CustomNumberInput } from "@custom-components";
import {
  StyledNumberInput,
  StyledNumberButton,
  StyledLabel,
  StyledLabelText,
} from "@styled-components";

const FancyNumberInput = (props) => {
  return (
    <CustomNumberInput
      buttonsComponent={StyledNumberButton}
      inputComponent={StyledNumberInput}
      labelComponent={StyledLabel}
      labelTextComponent={StyledLabelText}
      {...props}
    />
  );
};

export default FancyNumberInput;
