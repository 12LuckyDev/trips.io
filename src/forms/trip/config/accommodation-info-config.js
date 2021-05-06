import { FIELD_TYPES, ACCOMMODATION_MEALS_OPTIONS } from "@consts";
import imagesConfig from "./common/images-config";

export const accommodationConfig = [
	{ name: "name", type: FIELD_TYPES.TEXT },
	{ name: "link", type: FIELD_TYPES.TEXT },
	{ name: "price", type: FIELD_TYPES.NUMBER },
	imagesConfig,
	{
		name: "meals",
		type: FIELD_TYPES.SELECT,
		options: ACCOMMODATION_MEALS_OPTIONS,
	},
	{
		name: "text",
		type: FIELD_TYPES.TEXT,
		inputType: "textarea",
	},
];

export default accommodationConfig;
