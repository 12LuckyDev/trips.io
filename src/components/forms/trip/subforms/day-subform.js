import React from "react";
import { FancyFormField, FancySectionList } from "@fancy-components";
import { daySectionsConfig } from "@form-configs";
import { useSubform } from "@hooks";
import {
	FIELD_TYPES,
	DAY_FORM_TYPES,
	DAY_FORM_OPTIONS,
	DAY_INFO_OPTIONS,
} from "@consts";

const dayFormTypeChangeHandler = ({ newValue, newModel }) => ({
	...newModel,
	daysAmount: newValue === DAY_FORM_TYPES.RANGE ? 1 : null,
});

const DaySubform = ({ model, onChange }) => {
	const { getFieldProps } = useSubform(model, onChange);
	const { dayFormType, day, daysAmount } = model;

	const dayLabel = `Day: ${day}${
		dayFormType === DAY_FORM_TYPES.RANGE && daysAmount !== null
			? ` - ${day + daysAmount}`
			: ""
	}`;

	return (
		<>
			<FancyFormField
				{...getFieldProps("dayFormType", {
					type: FIELD_TYPES.SELECT,
					options: DAY_FORM_OPTIONS,
					modelChangeHandler: dayFormTypeChangeHandler,
				})}
			/>
			{dayFormType === DAY_FORM_TYPES.RANGE && (
				<FancyFormField
					{...getFieldProps("daysAmount", {
						type: FIELD_TYPES.NUMBER,
						labelText: "Days range length",
					})}
				/>
			)}
			{dayLabel}
			<FancySectionList
				{...getFieldProps("info", {
					type: FIELD_TYPES.SECTIONS_LIST,
					typePropName: "dayInfoType",
					options: DAY_INFO_OPTIONS,
					sectionLabel: dayLabel,
					sectionsConfig: daySectionsConfig,
				})}
			/>
		</>
	);
};

export default DaySubform;
