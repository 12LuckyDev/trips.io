import React from "react";
import { FancyButton } from "@fancy-components";
import { CustomForm } from "@custom-components";
import { StyledForm } from "@styled-components";

const FancyForm = ({ children, onSubmit, submitText }) => (
  <CustomForm component={StyledForm} onSubmit={onSubmit}>
    {children}
    {isFunc(onSubmit) && (
      <FancyButton text={submitText || "SUBMIT"} type="submit" />
    )}
  </CustomForm>
);

export default FancyForm;
