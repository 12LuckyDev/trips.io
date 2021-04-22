import React from "react";
import { FancyFormField, FancySectionList } from "@fancy-components";
import sectionsConfig from "./day-type-info-subforms";
import { useSubform } from "@hooks";
import {
	FIELD_TYPES,
	DAY_FORM_TYPES,
	DAY_FORM_OPTIONS,
	DAY_INFO_OPTIONS,
} from "@consts";

const dayFormTypeChangeHandler = (value) =>
	value === DAY_FORM_TYPES.RANGE ? { daysAmount: 1 } : { daysAmount: null };

const DaySubform = ({ model, onChange }) => {
	const { getFieldProps } = useSubform({ model, onChange });
	const { dayFormType, day, daysAmount, info } = model;

	const onChangeHandler = (value, name) => {
		onChange({ ...model, [name]: value });
	};

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
					changeHandler: dayFormTypeChangeHandler,
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
				name="info"
				typePropName="dayInfoType"
				onChange={onChangeHandler}
				options={DAY_INFO_OPTIONS}
				value={info}
				sectionLabel={dayLabel}
				sectionsConfig={sectionsConfig}
			/>
		</>
	);
};

export default DaySubform;
