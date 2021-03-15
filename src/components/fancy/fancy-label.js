import React from "react";
import { CustomLabel } from "@custom-components";
import { StyledLabel, StyledLabelText } from "@styled-components";

const FancyLabel = ({ labelText }) => {
  return (
    <CustomLabel
      labelText={labelText}
      labelComponent={StyledLabelText}
      labelTextComponent={StyledLabel}
    ></CustomLabel>
  );
};

export default FancyLabel;
