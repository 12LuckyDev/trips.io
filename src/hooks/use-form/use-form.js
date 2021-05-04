import { useState } from "react";
import getFieldPropsHelper from "./helpers/field-props-helper";
import { mapToObject, mapToObjectUsing } from "@12luckydev/utils";
import defaultValueHelper from "./helpers/default-value-helper";

const getInitialModel = (formConfig, initialModel) => {
	const model =
		initialModel ||
		mapToObjectUsing(formConfig, "name", ({ type }) =>
			defaultValueHelper(type)
		);

	return model;
};

const useForm = (
	formConfig = [],
	{ initialModel = null, arrayInputsProps = true, namespace } = {}
) => {
	const [model, setModel] = useState(getInitialModel(formConfig, initialModel));

	const inputsProps = formConfig.map((config) =>
		getFieldPropsHelper(config, setModel, model, { namespace })
	);

	return {
		inputsProps: arrayInputsProps
			? inputsProps
			: mapToObject(inputsProps, "name", true),
		model,
	};
};

export default useForm;
