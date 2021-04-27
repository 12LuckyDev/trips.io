import { isFunc } from "@12luckydev/utils";
import { FIELD_TYPES } from "@consts";
import modelChangeHelper from "./model-change-helper";
import defaultValueHelper from "./default-value-helper";

const getFieldPropsHelper = (fieldData = {}, onModelChange, model = {}) => {
	const {
		// COMMON
		type,
		name,
		labelText,
		valuePropName = "value",
		modelChangeHandler,
		getDefault,
		// SECTIONS_LIST
		component,
		getNew,
		arrayChangeHandler,
		sectionsConfig,
		keepFieldsKeys,
		typePropName,
		// SECTIONS_LIST && SELECT
		options,
		// TEXT
		inputType = "text",
	} = fieldData;

	let defaultProps = {
		name,
		type,
		onChange: (newValue, propName) =>
			onModelChange(
				modelChangeHelper(model, {
					name: propName,
					value: newValue,
					modelChangeHandler,
				})
			),
		[valuePropName]: !!model[name]
			? model[name]
			: isFunc(getDefault)
			? getDefault()
			: defaultValueHelper(type),
	};

	if (!!labelText) {
		defaultProps.labelText = labelText;
	}

	switch (type) {
		case FIELD_TYPES.SECTIONS_LIST:
			return {
				...defaultProps,
				component,
				getNew,
				arrayChangeHandler,
				sectionsConfig,
				keepFieldsKeys,
				typePropName,
				options,
			};
		case FIELD_TYPES.SELECT:
			return {
				...defaultProps,
				options,
			};
		case FIELD_TYPES.TEXT:
			return {
				...defaultProps,
				inputType,
			};
		default:
			return !type ? { ...defaultProps, component } : defaultProps;
	}
};

export default getFieldPropsHelper;
