import React from "react";
import { FancyButton } from "@fancy-components";
import { CustomForm } from "@custom-components";

const FancyForm = ({ children, onSubmit, submitText }) => (
  <CustomForm onSubmit={onSubmit}>
    {children}
    {typeof onSubmit === "function" && (
      <FancyButton text={submitText || "SUBMIT"} type="submit" />
    )}
  </CustomForm>
);

export default FancyForm;
