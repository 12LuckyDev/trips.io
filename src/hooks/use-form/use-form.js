import { useReducer, useCallback } from "react";
import { add, editAt } from "@12luckydev/utils";
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
    case FORM_ACTIONS.MODEL_CHANGE:
      return {
        ...payload,
      };
    case FORM_ACTIONS.MERGE_WITH_MODEL:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error("NO TYPE");
  }
};

const useForm = (formConfig = [], inputsPropsType = "ARRAY", initialState) => {
  const [state, dispatch] = useReducer(
    formReducer,
    initialState || getInitialState(formConfig)
  );

  const onModelChange = useCallback(
    (newModel, mergeWithOld = true) =>
      dispatch({
        type: mergeWithOld
          ? FORM_ACTIONS.MERGE_WITH_MODEL
          : FORM_ACTIONS.MODEL_CHANGE,
        payload: newModel,
      }),
    [dispatch]
  );

  const onValueChange = useCallback(
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

  const onEditArrayValue = useCallback(
    (value, name, index) =>
      dispatch({
        type: FORM_ACTIONS.ARRAY_VALUE_CHANGE,
        payload: { value, name, index },
      }),
    [dispatch]
  );

  const callbacks = {
    onValueChange,
    onAddToArray,
    onEditArrayValue,
    onModelChange,
  };

  const inputsProps = formConfig.map((config) =>
    getFieldPropsHelper(config, callbacks, state)
  );

  return { inputsProps, state };
};

export default useForm;
