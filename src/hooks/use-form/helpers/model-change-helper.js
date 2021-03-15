import { FORM_ACTIONS } from "@consts";
import { add, editAt, isFunc } from "@12luckydev/utils";

const modelChangeHelper = (
  changeType,
  model,
  {
    name,
    value,
    getNew,
    index,
    arrayChangeHandler,
    changeHandler,
    applyDefaultChange = true,
  } = {}
) => {
  const modelValue = name ? model[name] : null;

  switch (changeType) {
    case FORM_ACTIONS.VALUE_CHANGE:
      if (isFunc(changeHandler)) {
        const handledModel = changeHandler(value, model, name);
        if (applyDefaultChange) {
          return {
            ...handledModel,
            [name]: value,
          };
        }
        return handledModel;
      }
      return {
        [name]: value,
      };
    case FORM_ACTIONS.ARRAY_VALUE_ADD:
      const newArrayElement = isFunc(getNew) ? getNew() : value;
      return {
        [name]: add(modelValue, newArrayElement),
      };
    case FORM_ACTIONS.ARRAY_VALUE_CHANGE:
      const editedArray = editAt(modelValue, value, index);
      if (isFunc(arrayChangeHandler)) {
        return {
          [name]: arrayChangeHandler(editedArray, {
            value,
            index,
            oldValue: modelValue[index],
          }),
        };
      }
      return {
        [name]: editedArray,
      };
    default:
      throw new Error("NO TYPE");
  }
};

export default modelChangeHelper;
