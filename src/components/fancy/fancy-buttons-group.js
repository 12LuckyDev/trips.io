import React from "react";
import { FancyButtonsGroupRow } from "@fancy-components";
import { StyledLabel, StyledLabelText } from "@styled-components";

const FancyButtonsGroup = ({ labelText, ...buttonsRowProps }) => {
  const buttons = <FancyButtonsGroupRow {...buttonsRowProps} />;
  return !!labelText ? (
    <StyledLabel>
      <StyledLabelText>{labelText}</StyledLabelText>
      {buttons}
    </StyledLabel>
  ) : (
    buttons
  );
};

export default FancyButtonsGroup;
