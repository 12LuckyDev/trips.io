import { DAY_INFO_TYPES, ACCOMMODATION_MEALS_TYPES } from "@consts";
import { FancySubform } from "@fancy-components";
import accommodationConfig from "./accommodation-info-subform";
import foodInfoConfig from "./food-info-subform";

const sectionsConfig = {
	[DAY_INFO_TYPES.ACCOMMODATION]: {
		component: FancySubform,
		componentProps: { config: accommodationConfig },
		fillModel: () => ({
			name: "",
			link: "",
			price: null,
			text: "",
			meals: ACCOMMODATION_MEALS_TYPES.NONE,
		}),
	},
	[DAY_INFO_TYPES.FOOD]: {
		component: FancySubform,
		componentProps: { config: foodInfoConfig },
	},
};

export default sectionsConfig;
