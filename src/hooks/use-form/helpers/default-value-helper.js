import { FIELD_TYPES } from "@consts";

const defaultValueHelper = (type) => {
	switch (type) {
		case FIELD_TYPES.SECTIONS_LIST:
			return [];
		case FIELD_TYPES.NUMBER:
		case FIELD_TYPES.SELECT:
			return null;
		case FIELD_TYPES.TEXT:
			return "";
		default:
			return {};
	}
};

export default defaultValueHelper;
