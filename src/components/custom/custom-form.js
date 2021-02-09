import React from "react";

const CustomForm = ({
  children,
  onSubmit,
  className,
  component: Component,
}) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (typeof onSubmit === "function") {
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
