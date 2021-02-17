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
    componentProps.onChange = (newModel) => {
      globalOnChange(newModel, index);
    };
  }
  return <Component {...componentProps} />;
};

export default FancyListElement;
