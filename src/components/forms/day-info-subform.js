import React from "react";
import { useSubform } from "@hooks";
import { DAY_INFO_TYPES } from "@consts";
import { AccommodationInfoSubform } from "./day-type-info-subforms";

const DayInfoSubform = ({ onChange, model }) => {
	const { getFieldProps } = useSubform({ onChange, model });
	const { dayInfoType } = model;

	switch (dayInfoType) {
		case DAY_INFO_TYPES.ACCOMMODATION:
			return (
				<AccommodationInfoSubform getFieldProps={getFieldProps} model={model} />
			);
		default:
			return <>TODO</>;
	}
};

export default DayInfoSubform;
