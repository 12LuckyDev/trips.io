import { useReducer, useCallback } from "react";
import { isObject } from "@12luckydev/utils";
import { FORM_ACTIONS } from "@consts";
/**
 * TODO:
 * - inputsPropsType (ARRAY, OBJECT (name is key))
 * - map array to object (in utils)
 * - isFunc in utils
 */

const getInitialState = (formConfig) => {
  let state = {};
  formConfig.map(({ name }) => (state[name] = ""));
  return state;
};

const formReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case FORM_ACTIONS.VALUE_CHANGE:
      const { name, value } = payload;
      return {
        ...state,
        [name]: value,
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

  const inputsProps = formConfig.map(({ name, type, labelText }) => ({
    name,
    type,
    onChange,
    key: name,
    value: state[name],
    labelText,
  }));

  return { inputsProps, state };
};

export default useForm;
