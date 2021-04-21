import React from "react";
import { FancyForm, FancyFormFieldsList } from "@fancy-components";
import SectionSubform from "./section-subform";
import { firestore } from "@services";
import { useForm } from "@hooks";
import { FIELD_TYPES } from "@consts";
import { getId } from "@utils";
import { ARRAY_OPERATION } from "@12luckydev/array-handler";

const sectionChangeHandler = ({
	operation,
	newArray,
	newValue,
	oldArray,
	index,
}) => {
	if (operation === ARRAY_OPERATION.EDIT_AT) {
		const { sectionType, dayFormType, daysAmount } = newValue;
		const oldValue = oldArray[index];
		if (
			sectionType !== oldValue.sectionType ||
			dayFormType !== oldValue.dayFormType ||
			(dayFormType === "RANGE" && daysAmount !== oldValue.daysAmount)
		) {
			let lastDay = 0;
			return newArray.map((v) => {
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
		return newArray;
	}
	return newArray;
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
		type: FIELD_TYPES.SECTIONS_LIST,
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
				<FancyFormFieldsList data={inputsProps} />
			</FancyForm>
		</>
	);
};

export default TripFrom;
