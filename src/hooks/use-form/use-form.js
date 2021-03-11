import { useReducer, useCallback } from "react";
import { isObject, add, editAt, isFunc, isArray } from "@12luckydev/utils";
import { FORM_ACTIONS, FIELD_TYPES } from "@consts";
import getFieldPropsHelper from "./helpers/field-props-helper";

/**
 * TODO:
 * - inputsPropsType (ARRAY, OBJECT (name is key))
 * - map array to object (in utils)
 */

/**
 * REMEMBER
 * - globalOnChange always has one arg, if onChange is on model Component should know what arg are
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
    [dispatch]
  );

  const onAddToArray = useCallback(
    (value, name) =>
      dispatch({
        type: FORM_ACTIONS.ARRAY_VALUE_ADD,
        payload: { value, name },
      }),
    [dispatch]
  );

  const onEditArrayValue = (value, name, index) => {
    const config = formConfig.find((x) => x.name === name);
    if (isFunc(config.changeHandler)) {
      const oldArrayValue = state[name];
      const oldValue = oldArrayValue[index];
      const newArrayValue = editAt(oldArrayValue, value, index);
      const handledArrayValue = config.changeHandler(newArrayValue, {
        value,
        index,
        oldValue,
      });
      dispatch({
        type: FORM_ACTIONS.VALUE_CHANGE,
        payload: {
          value: isArray(handledArrayValue) ? handledArrayValue : newArrayValue,
          name,
        },
      });
    } else {
      dispatch({
        type: FORM_ACTIONS.ARRAY_VALUE_CHANGE,
        payload: { value, name, index },
      });
    }
  };

  const callbacks = {
    onChange,
    onAddToArray,
    onEditArrayValue,
  };

  const inputsProps = formConfig.map((config) =>
    getFieldPropsHelper(config, callbacks, state)
  );

  return { inputsProps, state };
};

export default useForm;
