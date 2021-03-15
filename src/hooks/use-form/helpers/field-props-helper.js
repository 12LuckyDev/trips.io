import { isFunc } from "@12luckydev/utils";
import { FIELD_TYPES, FORM_ACTIONS } from "@consts";
import modelChangeHelper from "./model-change-helper";

const getFieldPropsHelper = (
  fieldData = {},
  onModelChange,
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
        onAdd: isFunc(getNew)
          ? () =>
              onModelChange(
                modelChangeHelper(FORM_ACTIONS.ARRAY_VALUE_ADD, model, {
                  name,
                  getNew,
                })
              )
          : null,
        onChange: (value, index) =>
          onModelChange(
            modelChangeHelper(FORM_ACTIONS.ARRAY_VALUE_CHANGE, model, {
              name,
              value,
              index,
              arrayChangeHandler,
            })
          ),
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
    onChange: (value) =>
      onModelChange(
        modelChangeHelper(FORM_ACTIONS.VALUE_CHANGE, model, {
          name,
          value,
          changeHandler,
          applyDefaultChange,
        })
      ),
    value: model[name],
  };
};

export default getFieldPropsHelper;
