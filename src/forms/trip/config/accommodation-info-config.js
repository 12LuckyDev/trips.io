import { FIELD_TYPES, ACCOMMODATION_MEALS_OPTIONS } from "@consts";
import { imagesConfig, name, link, text } from "./common-config";

export const accommodationConfig = [
	name,
	link,
	{ name: "price", type: FIELD_TYPES.NUMBER },
	imagesConfig,
	{
		name: "meals",
		type: FIELD_TYPES.SELECT,
		options: ACCOMMODATION_MEALS_OPTIONS,
	},
	text,
];

export default accommodationConfig;
