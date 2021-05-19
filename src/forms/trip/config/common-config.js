import { FIELD_TYPES, IMAGE_FORM_TYPES } from "@consts";
import { FancyImageSubform } from "@fancy-components";

export const name = { name: "name", type: FIELD_TYPES.TEXT };
export const link = { name: "link", type: FIELD_TYPES.TEXT };
export const text = {
	name: "text",
	type: FIELD_TYPES.TEXT,
	inputType: "textarea",
};
export const imagesConfig = {
	component: FancyImageSubform,
	name: "images",
	valuePropName: "model",
	passNamespace: false,
	getDefault: () => ({
		type: IMAGE_FORM_TYPES.SINGLE,
		img: [],
		width: 75,
		galleryType: null,
		largest: null,
		side: null,
	}),
};
