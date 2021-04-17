import React from "react";
import { useSubform } from "@hooks";
import { FancyFormField } from "@fancy-components";
import { FIELD_TYPES, DAY_INFO_OPTIONS, DAY_INFO_TYPES } from "@consts";
import { AccommodationInfoSubform } from "./day-type-info-subforms";

const dayInfoTypeChangeHandler = (value, model) => {
	switch (value) {
		case DAY_INFO_TYPES.ACCOMMODATION:
			return {
				name: "",
				link: "",
				price: null,
				text: "",
				meals: "NONE",
			};
		case DAY_INFO_TYPES.FOOD:
			return { value: "TODO" };
		case DAY_INFO_TYPES.SIGHTSEEING:
			return { value: "TODO" };
		case DAY_INFO_TYPES.TRAILS:
			return { value: "TODO" };
		case DAY_INFO_TYPES.TRANSPORT:
			return { value: "TODO" };
		default:
			return model;
	}
};

const DayInfoSubform = ({ onChange, model }) => {
	const { getFieldProps } = useSubform({ onChange, model });
	const { dayInfoType } = model;
	let subform = null;

	switch (dayInfoType) {
		case DAY_INFO_TYPES.ACCOMMODATION:
			subform = (
				<AccommodationInfoSubform getFieldProps={getFieldProps} model={model} />
			);
			break;
		default:
			subform = "TODO";
			break;
	}

	return (
		<>
			<FancyFormField
				{...getFieldProps(
					"dayInfoType",
					{
						type: FIELD_TYPES.SELECT,
						data: DAY_INFO_OPTIONS,
						changeHandler: dayInfoTypeChangeHandler,
					},
					false
				)}
			/>
			{subform}
		</>
	);
};

export default DayInfoSubform;
