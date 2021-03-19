import React from "react";
import { CustomInput, CustomTextarea } from "@custom-components";
import {
  StyledInput,
  StyledLabel,
  StyledLabelText,
  StyledTextarea,
} from "@styled-components";

const FancyInput = ({ inputType, ...restProps }) => {
  if (inputType === "textarea") {
    return (
      <CustomTextarea
        labelComponent={StyledLabel}
        labelTextComponent={StyledLabelText}
        textareaComponent={StyledTextarea}
        rows={6}
        {...restProps}
      />
    );
  }
  return (
    <CustomInput
      labelComponent={StyledLabel}
      labelTextComponent={StyledLabelText}
      inputComponent={StyledInput}
      type={inputType}
      {...restProps}
    />
  );
};

export default FancyInput;
