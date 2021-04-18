import React from "react";
import {
	FIELD_TYPES,
	DAY_FORM_TYPES,
	DAY_FORM_OPTIONS,
	DAY_INFO_OPTIONS,
	DAY_INFO_TYPES,
} from "@consts";
import { FancyFormField, FancySectionList } from "@fancy-components";
import DayInfoSubform from "./day-info-subform";

const dayFormTypeChangeHandler = (value) =>
	value === DAY_FORM_TYPES.RANGE ? { daysAmount: 1 } : { daysAmount: null };

const dayInfoTypeChangeHandler = (value, model) => {
	const { id } = model;
	switch (value) {
		case DAY_INFO_TYPES.ACCOMMODATION:
			return {
				id,
				name: "",
				link: "",
				price: null,
				text: "",
				meals: "NONE",
			};
		case DAY_INFO_TYPES.FOOD:
			return { id, value: "TODO" };
		case DAY_INFO_TYPES.SIGHTSEEING:
			return { id, value: "TODO" };
		case DAY_INFO_TYPES.TRAILS:
			return { id, value: "TODO" };
		case DAY_INFO_TYPES.TRANSPORT:
			return { id, value: "TODO" };
		default:
			return model;
	}
};

const DaySubform = ({ model, getFieldProps, onChange }) => {
	const { dayFormType, day, daysAmount, info } = model;

	const onChangeHandler = (value, name) => {
		onChange({ ...model, [name]: value });
	};

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
			Day: {day}{" "}
			{dayFormType === DAY_FORM_TYPES.RANGE &&
				daysAmount !== null &&
				`- ${day + daysAmount}`}
			<FancySectionList
				component={DayInfoSubform}
				name="info"
				typePropName="dayInfoType"
				typeChangeHandler={dayInfoTypeChangeHandler}
				onChange={onChangeHandler}
				options={DAY_INFO_OPTIONS}
				value={info}
			/>
		</>
	);
};

export default DaySubform;
