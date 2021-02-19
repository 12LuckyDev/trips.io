import React from "react";
import { isFunc } from "@12luckydev/utils";

const CustomForm = ({
  children,
  onSubmit,
  className,
  component: Component,
}) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (isFunc(onSubmit)) {
      onSubmit();
    }
  };

  return !!Component ? (
    <Component onSubmit={onSubmitHandler}> {children}</Component>
  ) : (
    <form className={className} onSubmit={onSubmitHandler}>
      {children}
    </form>
  );
};

export default CustomForm;
