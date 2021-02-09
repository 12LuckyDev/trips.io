import React from "react";
import { FancyInput } from "@fancy-components";
import { FormRow } from "@styled-components";

const FancyFormField = ({ ...fieldProps }) => {
  return (
    <FormRow>
      <FancyInput {...fieldProps} />
    </FormRow>
  );
};

export default FancyFormField;
