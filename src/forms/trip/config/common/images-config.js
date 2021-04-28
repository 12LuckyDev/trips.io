import { FancyImageSubform } from "@fancy-components";
import { IMAGE_FORM_TYPES } from "@consts";

const imagesConfig = {
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
};

export default imagesConfig;