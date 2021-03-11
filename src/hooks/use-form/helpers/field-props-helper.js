import { FIELD_TYPES } from "@consts";

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
  } = fieldData;

  const { onAddToArray, onEditArrayValue, onChange } = callbacks;

  let defaultProps = {
    name,
    type,
  };

  if (addKey) {
    defaultProps.key = name;
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
        onChange: (value, index) => onEditArrayValue(value, name, index),
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
    onChange,
    value: model[name],
    labelText,
  };
};

export default getFieldPropsHelper;
