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

  const onModelChange = (newModel, mergeModel = true) => {
    if (mergeModel) {
      onChangeCallback({ ...model, ...newModel });
    } else {
      onChangeCallback(newModel);
    }
  };

  const getFieldProps = (name, fieldConfig = {}, mergeModel = true) =>
    getFieldPropsHelper(
      { ...fieldConfig, name },
      (newModel) => onModelChange(newModel, mergeModel),
      model,
      false
    );

  return { getFieldProps };
};

export default useSubform;
