import { useCallback } from "react";
import { isFunc } from "@12luckydev/utils";
import getFieldPropsHelper from "./helpers/field-props-helper";

const useSubform = ({ model, onChange, subName } = {}) => {
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

	return { getFieldProps };
};

export default useSubform;
