import { useCallback } from "react";
import { isFunc } from "@12luckydev/utils";

const useSubform = ({
  model,
  onChange,
  subName,
  customChangeAction,
  defaultChangeOnCustom = true,
} = {}) => {
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

  const onChangeHandler = (value, name) => {
    if (isFunc(customChangeAction)) {
      const modelOverride = customChangeAction(value, name, model);
      const defaultNewValue = defaultChangeOnCustom ? { [name]: value } : null;
      const newModel = !!modelOverride
        ? { ...model, ...defaultNewValue, ...modelOverride }
        : { ...model, [name]: value };
      onChangeCallback(newModel);
    } else {
      onChangeCallback({ ...model, [name]: value });
    }
  };

  const getFormProps = (name) => ({
    name,
    value: model[name],
    onChange: onChangeHandler,
  });

  return { onChangeHandler, getFormProps };
};

export default useSubform;
