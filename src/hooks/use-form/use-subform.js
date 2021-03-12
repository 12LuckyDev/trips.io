import { useCallback } from "react";
import { isFunc } from "@12luckydev/utils";
import getFieldPropsHelper from "./helpers/field-props-helper";

const useSubform = ({ model, onChange, subName } = {}) => {
  const onChangeCallback = useCallback(
    (newModel) => {
      if (isFunc(onChange)) {
        if (!!subName) {
          onChange(newModel, subName);
        } else {
          onChange(newModel);
        }
      }
    },
    [onChange, subName]
  );

  const onValueChange = (value, name) => {
    onChangeCallback({ ...model, [name]: value });
  };

  const onModelChange = (newModel, mergeWithOld = true) => {
    if (mergeWithOld) {
      onChangeCallback({ ...model, ...newModel });
    } else {
      onChangeCallback(newModel);
    }
  };

  const callbacks = {
    onValueChange,
    onModelChange,
  };

  const getFieldProps = (name, fieldConfig = {}) =>
    getFieldPropsHelper({ ...fieldConfig, name }, callbacks, model, false);

  return { getFieldProps };
};

export default useSubform;
