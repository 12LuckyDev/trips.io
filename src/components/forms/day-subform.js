import React from "react";
import {
	FIELD_TYPES,
	DAY_FORM_TYPES,
	DAY_FORM_OPTIONS,
	DAY_INFO_OPTIONS,
} from "@consts";
import { FancyFormField, FancySectionList } from "@fancy-components";
import sectionListConfig from "./day-type-info-subforms";

const dayFormTypeChangeHandler = (value) =>
	value === DAY_FORM_TYPES.RANGE ? { daysAmount: 1 } : { daysAmount: null };

const DaySubform = ({ model, getFieldProps, onChange }) => {
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
					data: DAY_FORM_OPTIONS,
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
				{...sectionListConfig}
			/>
		</>
	);
};

export default DaySubform;
