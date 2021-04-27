import { DAY_INFO_TYPES, ACCOMMODATION_MEALS_TYPES } from "@consts";
import { FancySubform } from "@fancy-components";
import accommodationConfig from "./accommodation-info-config";
import foodInfoConfig from "./food-info-config";
import transportInfoConfig from "./transport-info-config";
import sightseeingInfoConfig from "./sightseeing-info-config";
import trailsInfoConfig from "./trails-info-config";

const daySectionsConfig = {
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
	[DAY_INFO_TYPES.TRANSPORT]: {
		component: FancySubform,
		componentProps: { config: transportInfoConfig },
	},
	[DAY_INFO_TYPES.SIGHTSEEING]: {
		component: FancySubform,
		componentProps: { config: sightseeingInfoConfig },
	},
	[DAY_INFO_TYPES.TRAILS]: {
		component: FancySubform,
		componentProps: { config: trailsInfoConfig },
	},
};

export default daySectionsConfig;
