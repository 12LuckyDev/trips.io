import { isFunc, editAt } from "@12luckydev/utils";
import { FIELD_TYPES } from "@consts";

const handleChangeHandler = (
  changeHandler,
  applyDefaultChange,
  value,
  model,
  name
) => {
  const newModel = changeHandler(value, model, name);
  if (applyDefaultChange) {
    return { [name]: value, ...newModel };
  }
  return newModel;
};

const handleArrayChangeHandler = (arrayChangeHandler, oldArray, value, index) => {
  const oldValue = oldArray[index];
  const newArrayValue = editAt(oldArray, value, index);
  return arrayChangeHandler(newArrayValue, {
    value,
    index,
    oldValue,
  });
};

// TODO: this func should be useb by useSubform too
const getFieldPropsHelper = (
  fieldData = {},
  callbacks = {},
  model = {},
  addKey = true
) => {
  const {
    name,
    type,
    labelText,
    component,
    getNew,
    modelPropName,
    data = [],
    idKey,
    nameKey,
    arrayChangeHandler,
    changeHandler,
    applyDefaultChange = true,
  } = fieldData;

  const {
    onAddToArray,
    onEditArrayValue,
    onValueChange,
    onModelChange,
  } = callbacks;

  let defaultProps = { name };

  if (addKey) {
    defaultProps.key = name;
  }

  if (!!labelText) {
    defaultProps.labelText = labelText;
  }

  if (!!type) {
    defaultProps.type = type;
  }

  let customProps = null;

  switch (type) {
    case FIELD_TYPES.ARRAY:
      return {
        ...defaultProps,
        data: model[name],
        component,
        modelPropName,
        onAdd: () => onAddToArray(getNew(), name),
        onChange: (value, index) => {
          if (isFunc(arrayChangeHandler)) {
            onValueChange(
              handleArrayChangeHandler(arrayChangeHandler, model[name], value, index),
              name
            );
          } else {
            onEditArrayValue(value, name, index);
          }
        },
      };
    case FIELD_TYPES.SELECT:
      customProps = {
        data,
        idKey,
        nameKey,
      };
      break;
    default:
      customProps = null;
      break;
  }

  return {
    ...defaultProps,
    ...customProps,
    onChange: isFunc(changeHandler)
      ? (value) =>
          onModelChange(
            handleChangeHandler(
              changeHandler,
              applyDefaultChange,
              value,
              model,
              name
            )
          )
      : onValueChange,
    value: model[name],
  };
};

export default getFieldPropsHelper;
