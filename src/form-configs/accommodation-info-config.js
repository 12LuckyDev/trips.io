import { FIELD_TYPES, ACCOMMODATION_MEALS_OPTIONS } from "@consts";
import imagesConfig from "./common/images-config";

export const accommodationConfig = [
	{ name: "name", type: FIELD_TYPES.TEXT, labelText: "Name" },
	{ name: "link", type: FIELD_TYPES.TEXT, labelText: "Accommodation homepage" },
	{ name: "price", type: FIELD_TYPES.NUMBER, labelText: "Accommodation price" },
	imagesConfig,
	{
		name: "meals",
		type: FIELD_TYPES.SELECT,
		options: ACCOMMODATION_MEALS_OPTIONS,
		labelText: "Meals",
	},
	{
		name: "text",
		type: FIELD_TYPES.TEXT,
		labelText: "Extra info",
		inputType: "textarea",
	},
];

export default accommodationConfig;
