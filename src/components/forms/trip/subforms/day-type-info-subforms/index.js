import AccommodationInfoSubform from "./accommodation-info-subform";
import FoodInfoSubForm from "./food-info-subform";

import { DAY_INFO_TYPES, ACCOMMODATION_MEALS_TYPES } from "@consts";

const sectionsConfig = {
	[DAY_INFO_TYPES.ACCOMMODATION]: {
		component: AccommodationInfoSubform,
		fillModel: () => ({
			name: "",
			link: "",
			price: null,
			text: "",
			meals: ACCOMMODATION_MEALS_TYPES.NONE,
		}),
	},
	[DAY_INFO_TYPES.FOOD]: { component: FoodInfoSubForm },
};

export default sectionsConfig;
