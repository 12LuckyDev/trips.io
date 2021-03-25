import React from "react";
import { FancyButtonsGroupRow, FancyLabel } from "@fancy-components";
import { Column } from "@styled-components";

const FancyButtonsGroup = ({ labelText, ...buttonsRowProps }) => {
  const buttons = <FancyButtonsGroupRow {...buttonsRowProps} />;
  return !!labelText ? (
    <Column>
      <FancyLabel labelText={labelText} />
      {buttons}
    </Column>
  ) : (
    buttons
  );
};

export default FancyButtonsGroup;
