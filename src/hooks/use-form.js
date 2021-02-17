import { useReducer, useCallback } from "react";
import { isObject, add, editAt } from "@12luckydev/utils";
import { FORM_ACTIONS } from "@consts";
import { FIELD_TYPES } from "@consts";

/**
 * TODO:
 * - inputsPropsType (ARRAY, OBJECT (name is key))
 * - map array to object (in utils)
 * - isFunc in utils
 */

const getInitialState = (formConfig) => {
  let state = {};
  formConfig.forEach(({ name, type }) => {
    switch (type) {
      case FIELD_TYPES.ARRAY:
        state[name] = [];
        break;
      default:
        state[name] = "";
    }
  });
  return state;
};

const formReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case FORM_ACTIONS.VALUE_CHANGE:
      return {
        ...state,
        [payload.name]: payload.value,
      };
    case FORM_ACTIONS.ARRAY_VALUE_ADD:
      return {
        ...state,
        [payload.name]: add(state[payload.name], payload.value),
      };
    case FORM_ACTIONS.ARRAY_VALUE_CHANGE:
      return {
        ...state,
        [payload.name]: editAt(
          state[payload.name],
          payload.value,
          payload.index
        ),
      };
    default:
      if (!type && isObject(payload)) {
        return {
          ...state,
          ...payload,
        };
      } else {
        throw new Error();
      }
  }
};

const useForm = (formConfig = [], inputsPropsType = "ARRAY", initialState) => {
  const [state, dispatch] = useReducer(
    formReducer,
    initialState || getInitialState(formConfig)
  );

  const onChange = useCallback(
    (value, name) =>
      dispatch({ type: FORM_ACTIONS.VALUE_CHANGE, payload: { value, name } }),
    []
  );

  const onAddToArray = useCallback(
    (value, name) =>
      dispatch({
        type: FORM_ACTIONS.ARRAY_VALUE_ADD,
        payload: { value, name },
      }),
    []
  );

  const onEditArrayValue = useCallback(
    (value, name, index) =>
      dispatch({
        type: FORM_ACTIONS.ARRAY_VALUE_CHANGE,
        payload: { value, name, index },
      }),
    []
  );

  const inputsProps = formConfig.map(
    ({ name, type, labelText, component, getNew, modelPropName }) => {
      if (type === FIELD_TYPES.ARRAY) {
        return {
          name,
          type,
          key: name,
          component,
          modelPropName,
          data: state[name],
          onAdd: () => onAddToArray(getNew(), name),
          onChange: (value, index) => onEditArrayValue(value, name, index),
        };
      }

      return {
        name,
        type,
        onChange,
        key: name,
        value: state[name],
        labelText,
      };
    }
  );
  return { inputsProps, state };
};

export default useForm;
