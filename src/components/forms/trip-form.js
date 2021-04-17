import React from "react";
import { FancyForm, FancyFormField, FancyList } from "@fancy-components";
import SectionSubform from "./section-subform";
import { firestore } from "@services";
import { useForm } from "@hooks";
import { FIELD_TYPES } from "@consts";
import { getId } from "@utils";

const sectionChangeHandler = (array, { value, oldValue }) => {
	const { sectionType, dayFormType, daysAmount } = value;

	if (
		sectionType !== oldValue.sectionType ||
		dayFormType !== oldValue.dayFormType ||
		(dayFormType === "RANGE" && daysAmount !== oldValue.daysAmount)
	) {
		let lastDay = 0;
		return array.map((v) => {
			if (v.sectionType === "DAY") {
				if (v.dayFormType === "SINGLE") {
					lastDay++;
					return { ...v, day: lastDay };
				} else if (v.dayFormType === "RANGE" && v.daysAmount !== null) {
					lastDay++;
					const rangeFirstDay = lastDay;
					lastDay += parseInt(v.daysAmount);
					return { ...v, day: rangeFirstDay };
				}
			}
			return v;
		});
	}
	return array;
};

const formConfig = [
	{ name: "title", type: FIELD_TYPES.TEXT, labelText: "Trip title" },
	{
		name: "text",
		type: FIELD_TYPES.TEXT,
		labelText: "Trip description",
		inputType: "textarea",
	},
	{
		name: "sections",
		type: FIELD_TYPES.ARRAY,
		component: SectionSubform,
		getNew: () => ({
			id: getId(),
			sectionType: null,
			dayFormType: null,
			daysAmount: null,
			day: null,
			info: [],
		}),
		arrayChangeHandler: sectionChangeHandler,
	},
];

const TripFrom = ({ onSuccess }) => {
	const { inputsProps, state } = useForm(formConfig);
	const onSubmit = () => {
		firestore.collection("trips").add(state).then(onSuccess);
	};
	return (
		<>
			<FancyForm onSubmit={onSubmit}>
				<FancyList
					keyField="key"
					data={inputsProps}
					component={FancyFormField}
				/>
			</FancyForm>
		</>
	);
};

export default TripFrom;
