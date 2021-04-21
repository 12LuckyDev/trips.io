import React from "react";
import { FancyFormField } from "@fancy-components";
import { FIELD_TYPES } from "@consts";
import { isFunc, isArray } from "@12luckydev/utils";

const FancySectionSelect = ({
	options,
	value,
	typePropName,
	onChange,
	labelText,
	sectionsConfig,
	keepFieldsKeys,
	getNew,
}) => {
	const onChangeHandler = (newType) => {
		const oldValue = value ?? (isFunc(getNew) ? getNew() : {});
		let newValue = {};

		const newSectionConfig = sectionsConfig && sectionsConfig[newType];
		if (!newSectionConfig?.fillModel && !keepFieldsKeys) {
			newValue = { ...oldValue, [typePropName]: newType };
		} else {
			if (isFunc(newSectionConfig?.fillModel)) {
				newValue = newSectionConfig.fillModel();
			}
			if (isArray(keepFieldsKeys, false)) {
				keepFieldsKeys.forEach((key) => (newValue[key] = oldValue[key]));
			}
			newValue[typePropName] = newType;
		}

		onChange(newValue);
	};
	const type = value ? value[typePropName] : null;
	return (
		<FancyFormField
			labelText={labelText}
			type={FIELD_TYPES.SELECT}
			data={options}
			value={type}
			onChange={onChangeHandler}
		/>
	);
};

export default FancySectionSelect;
