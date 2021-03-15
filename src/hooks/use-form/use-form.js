import { useReducer, useCallback } from "react";
import { FIELD_TYPES, HOOK_ACTIONS } from "@consts";
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
    case HOOK_ACTIONS.MODEL_CHANGE:
      return {
        ...payload,
      };
    case HOOK_ACTIONS.MERGE_WITH_MODEL:
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
          ? HOOK_ACTIONS.MERGE_WITH_MODEL
          : HOOK_ACTIONS.MODEL_CHANGE,
        payload: newModel,
      }),
    [dispatch]
  );

  const inputsProps = formConfig.map((config) =>
    getFieldPropsHelper(config, onModelChange, state)
  );

  return { inputsProps, state };
};

export default useForm;
