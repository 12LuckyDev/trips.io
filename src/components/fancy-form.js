import React from "react";
import { FancyButton } from "./";

const FancyForm = ({ children, onSubmit, submitText }) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (typeof onSubmit === "function") {
      onSubmit();
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      {children}
      {typeof onSubmit === "function" && (
        <FancyButton text={submitText || "SUBMIT"} type="submit" />
      )}
    </form>
  );
};

export default FancyForm;
