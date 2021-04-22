import { useState } from "react";
import { FIELD_TYPES } from "@consts";
import getFieldPropsHelper from "./helpers/field-props-helper";

/**
 * TODO:
 * - inputsPropsType (ARRAY, OBJECT (name is key))
 * - map array to object (in utils)
 */

const getInitialModel = (formConfig, initialModel) => {
	let model = { ...initialModel };
	formConfig.forEach(({ name, type }) => {
		switch (type) {
			case FIELD_TYPES.SECTIONS_LIST:
				model[name] = [];
				break;
			case FIELD_TYPES.NUMBER:
				model[name] = null;
				break;
			default:
				model[name] = "";
		}
	});
	return model;
};

const useForm = (
	formConfig = [],
	initialModel = null,
	arrayInputsProps = true
) => {
	const [model, setModel] = useState(getInitialModel(formConfig, initialModel));

	const inputsProps = formConfig.map((config) =>
		getFieldPropsHelper(config, setModel, model)
	);

	return { inputsProps, model };
};

export default useForm;
