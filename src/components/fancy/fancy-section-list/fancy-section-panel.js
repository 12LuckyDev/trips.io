import React from "react";
import { FancyButton } from "@fancy-components";
import { isArray } from "@12luckydev/utils";
import { Column, Row, Header } from "@styled-components";
import { ARRAY_OPERATION } from "@12luckydev/array-handler";
import FancySectionSelect from "./fancy-section-select";

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
	const sectionConponentProps = !!sectionConfig?.componentProps
		? sectionConfig.componentProps
		: null;
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
				{sectionLabel && (
					<Header>
						{sectionLabel} {" Section: "} {type}
					</Header>
				)}
			</Row>
			{isArray(options, false) && (
				<FancySectionSelect
					options={options}
					value={value}
					typePropName={typePropName}
					onChange={onChangeHandler}
					sectionsConfig={sectionsConfig}
					keepFieldsKeys={keepFieldsKeys}
				/>
			)}
			{SectionComponent && (
				<SectionComponent
					model={value}
					onChange={onChangeHandler}
					{...componentProps}
					{...sectionConponentProps}
				/>
			)}
		</Column>
	);
};

export default FancySectionPanel;
