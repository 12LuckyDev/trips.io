import React from "react";
import { FancyInput, FancyList, FancyButtonsGroup } from "@fancy-components";
import { FormRow } from "@styled-components";
import { FIELD_TYPES } from "@consts";

const renderComponent = (type, fieldProps) => {
  switch (type) {
    case FIELD_TYPES.ARRAY:
      return <FancyList {...fieldProps} />;
    case FIELD_TYPES.TEXT:
      return <FancyInput {...fieldProps} />;
    case FIELD_TYPES.SELECT:
      return <FancyButtonsGroup {...fieldProps} />;
    default:
      return null;
  }
};

const FancyFormField = ({ type, ...fieldProps }) => {
  return <FormRow>{renderComponent(type, fieldProps)}</FormRow>;
};

export default FancyFormField;
