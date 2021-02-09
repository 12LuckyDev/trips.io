import React from "react";

const FancyListElement = ({
  model,
  index,
  component: Component,
  modelPropName,
  modelIsObject,
  globalOnChange,
}) => {
  let componentProps = modelPropName
    ? { [modelPropName]: model }
    : { ...model };

  if (
    (!modelIsObject || typeof model.onChange !== "function") &&
    typeof globalOnChange === "function"
  ) {
    componentProps.onChange = () => {
      globalOnChange(index, model);
    };
  }

  return <Component {...componentProps} />;
};

export default FancyListElement;
