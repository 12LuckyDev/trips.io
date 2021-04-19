import React from "react";
import { FancyFormField } from "@fancy-components";
import { FIELD_TYPES } from "@consts";
import { isArray, isFunc } from "@12luckydev/utils";
import { Column } from "@styled-components";

// TODO
// move up/down
// delete

const FancySectionPanel = ({
	options,
	value,
	typePropName,
	index,
	onChange,
	component,
	componentProps,
	keepFieldsKeys,
	sectionsConfig,
}) => {
	const onChangeHandler = (value) => {
		onChange(value, index);
	};

	const type = value[typePropName];
	const sectionConfig = sectionsConfig && sectionsConfig[type];
	const SectionComponent = !!sectionConfig?.component
		? sectionConfig.component
		: component || null;

	const onTypeChangeHandler = (propValue, propName) => {
		const newSectionConfig = sectionsConfig && sectionsConfig[propValue];
		if (!newSectionConfig?.fillModel && !keepFieldsKeys) {
			onChangeHandler({ ...value, [propName]: propValue });
		} else {
			let newValue = isFunc(newSectionConfig?.fillModel)
				? newSectionConfig.fillModel()
				: {};

			if (isArray(keepFieldsKeys, false)) {
				keepFieldsKeys.forEach((key) => (newValue[key] = value[key]));
			}

			onChangeHandler({ ...newValue, [propName]: propValue });
		}
	};

	return (
		<Column border>
			{isArray(options, false) && (
				<FancyFormField
					type={FIELD_TYPES.SELECT}
					data={options}
					value={type}
					name={typePropName}
					onChange={onTypeChangeHandler}
				/>
			)}
			{SectionComponent && (
				<SectionComponent
					model={value}
					onChange={onChangeHandler}
					{...componentProps}
				/>
			)}
		</Column>
	);
};

export default FancySectionPanel;
