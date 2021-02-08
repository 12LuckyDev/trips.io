import React from "react";

const CustomForm = ({ children, onSubmit }) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (typeof onSubmit === "function") {
      onSubmit();
    }
  };

  return <form onSubmit={onSubmitHandler}>{children}</form>;
};

export default CustomForm;
