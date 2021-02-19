import React from "react";
import { isFunc } from "@12luckydev/utils";

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

  if ((!modelIsObject || !isFunc(model.onChange)) && isFunc(globalOnChange)) {
    componentProps.onChange = (newModel) => {
      globalOnChange(newModel, index);
    };
  }
  return <Component {...componentProps} />;
};

export default FancyListElement;
