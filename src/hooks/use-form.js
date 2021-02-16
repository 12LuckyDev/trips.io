import { useReducer, useCallback } from "react";
import { isObject, add } from "@12luckydev/utils";
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
      const arrayValue = state[payload.name];
      return {
        ...state,
        [payload.name]: add(arrayValue, payload.value),
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

  //this dont know what value it will be
  const onAddToArray = useCallback(
    (value, name) =>
      dispatch({
        type: FORM_ACTIONS.ARRAY_VALUE_ADD,
        payload: { value, name },
      }),
    []
  );

  const inputsProps = formConfig.map(
    ({ name, type, labelText, component, getNew }) => {
      if (type === FIELD_TYPES.ARRAY) {
        return {
          name,
          type,
          key: name,
          component,
          data: state[name],
          onAdd: () => onAddToArray(getNew(), name),
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
