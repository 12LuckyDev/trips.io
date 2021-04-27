import { useCallback } from "react";
import { isArray, isFunc } from "@12luckydev/utils";
import getFieldPropsHelper from "./helpers/field-props-helper";

const useSubform = (model, onChange, { config, subName } = {}) => {
	const onChangeCallback = useCallback(
		(newModel) => {
			if (isFunc(onChange)) {
				if (!!subName) {
					onChange(newModel, subName);
				} else {
					onChange(newModel);
				}
			}
		},
		[onChange, subName]
	);

	const getFieldProps = (name, fieldConfig = {}) =>
		getFieldPropsHelper({ ...fieldConfig, name }, onChangeCallback, model);

	const inputsProps = isArray(config, false)
		? config.map((c) => getFieldPropsHelper(c, onChangeCallback, model))
		: [];

	return { getFieldProps, inputsProps };
};

export default useSubform;
