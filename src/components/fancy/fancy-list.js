import React from "react";
import { FancyListElement } from "@fancy-components";
import { isObject } from "@12luckydev/utils";

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
  data = [],
  keyField,
}) => {
  return data.map((model, index) => (
    <FancyListElement
      index={index}
      component={Component}
      modelPropName={modelPropName}
      globalOnChange={globalOnChange}
      {...modelHandler(model, keyField, index)}
    />
  ));
};

export default FancyList;
