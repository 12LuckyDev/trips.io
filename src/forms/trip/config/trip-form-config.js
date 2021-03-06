import {
	FIELD_TYPES,
	SECTION_TYPES,
	SECTION_OPTIONS,
	DAY_FORM_TYPES,
} from "@consts";

import InfoSubform from "../subforms/info-subform";
import DaySubform from "../subforms/day-subform";

const sectionChangeHandler = ({ newArray, newValue, oldArray, index }) => {
	const oldValue = oldArray[index];
	if (
		!oldValue ||
		!newValue ||
		newValue.sectionType !== oldValue.sectionType ||
		newValue.dayFormType !== oldValue.dayFormType ||
		(newValue.dayFormType === DAY_FORM_TYPES.RANGE &&
			newValue.daysAmount !== oldValue.daysAmount)
	) {
		let lastDay = 0;
		return newArray.map((v) => {
			if (v.sectionType === SECTION_TYPES.DAY) {
				if (v.dayFormType === DAY_FORM_TYPES.SINGLE) {
					lastDay++;
					return { ...v, day: lastDay };
				} else if (
					v.dayFormType === DAY_FORM_TYPES.RANGE &&
					v.daysAmount !== null
				) {
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
};

const sectionsConfig = {
	[SECTION_TYPES.DAY]: {
		component: DaySubform,
		fillModel: () => ({
			dayFormType: DAY_FORM_TYPES.SINGLE,
			daysAmount: null,
			day: null,
			info: [],
		}),
	},
	[SECTION_TYPES.INFO]: {
		component: InfoSubform,
		fillModel: () => ({
			info: [],
		}),
	},
};

const tripFormConfig = [
	{ name: "title", type: FIELD_TYPES.TEXT },
	{
		name: "text",
		type: FIELD_TYPES.TEXT,
		inputType: "textarea",
	},
	{
		name: "sections",
		type: FIELD_TYPES.SECTIONS_LIST,
		options: SECTION_OPTIONS,
		typePropName: "sectionType",
		arrayChangeHandler: sectionChangeHandler,
		sectionsConfig,
		passNamespace: false,
	},
];

export default tripFormConfig;
