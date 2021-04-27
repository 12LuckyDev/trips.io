import { FancyImageSubform } from "@fancy-components";
import {
	FIELD_TYPES,
	ACCOMMODATION_MEALS_OPTIONS,
	IMAGE_FORM_TYPES,
} from "@consts";

export const accommodationConfig = [
	{ name: "name", type: FIELD_TYPES.TEXT, labelText: "Name" },
	{ name: "link", type: FIELD_TYPES.TEXT, labelText: "Accommodation homepage" },
	{ name: "price", type: FIELD_TYPES.NUMBER, labelText: "Accommodation price" },
	{
		component: FancyImageSubform,
		name: "images",
		labelText: "Gallery",
		valuePropName: "model",
		getDefault: () => ({
			type: IMAGE_FORM_TYPES.SINGLE,
			img: [],
			width: 75,
			galleryType: null,
			largest: null,
			side: null,
		}),
	},
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
