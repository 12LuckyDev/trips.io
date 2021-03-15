import React from "react";
import { FancyListElement, FancyButton, FancyLabel } from "@fancy-components";
import { Column } from "@styled-components";
import { isFunc, isObject } from "@12luckydev/utils";

const modelHandler = (model, keyField, index) => {
  if (!isObject(model, false)) {
    return { key: index, model, modelIsObject: false };
  }

  if (!keyField) {
    if ("key" in model) {
      const { key, ...rest } = model;
      return { key, model: rest, modelIsObject: true };
    } else {
      return { key: index, model, modelIsObject: true };
    }
  }

  return { key: model[keyField], model, modelIsObject: true };
};

const FancyList = ({
  modelPropName,
  component: Component,
  onChange: globalOnChange,
  onAdd,
  data = [],
  keyField,
  name,
  labelText
}) => {
  const onGlobalChangeHandler = isFunc(globalOnChange)
    ? (value, index) => {
        globalOnChange(value, index, name);
      }
    : null;

  return (
    <Column>
      {labelText && <FancyLabel labelText={labelText} />}
      {data.map((model, index) => (
        <FancyListElement
          index={index}
          component={Component}
          modelPropName={modelPropName}
          globalOnChange={onGlobalChangeHandler}
          {...modelHandler(model, keyField, index)}
        />
      ))}
      {onAdd && <FancyButton text="ADD" onClick={onAdd} />}
    </Column>
  );
};

export default FancyList;
