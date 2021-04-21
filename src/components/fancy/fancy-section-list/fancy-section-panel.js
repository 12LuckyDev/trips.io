import React from "react";
import { FancyFormField, FancyButton } from "@fancy-components";
import { FIELD_TYPES } from "@consts";
import { isArray, isFunc } from "@12luckydev/utils";
import { Column, Row, Header } from "@styled-components";
import { ARRAY_OPERATION } from "@12luckydev/array-handler";

const FancySectionPanel = ({
	options,
	value,
	typePropName,
	index,
	first,
	last,
	onChange,
	component,
	componentProps,
	keepFieldsKeys,
	sectionsConfig,
	sectionLabel,
}) => {
	const onChangeHandler = (newValue) => {
		onChange(ARRAY_OPERATION.EDIT_AT, {
			index,
			newValue,
		});
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
			<Row reverse>
				<FancyButton
					text="DELETE SECTION"
					onClick={() => onChange(ARRAY_OPERATION.REMOVE_AT, { index })}
				/>
				<FancyButton
					text="MOVE DOWN"
					onClick={() => onChange(ARRAY_OPERATION.MOVE_UP, { index })}
					disabled={last}
				/>
				<FancyButton
					text="MOVE UP"
					onClick={() => onChange(ARRAY_OPERATION.MOVE_DOWN, { index })}
					disabled={first}
				/>
				<Header>
					{sectionLabel} {" Section: "} {type}
				</Header>
			</Row>
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
