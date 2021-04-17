import { v4 as uuid } from "uuid";

const getId = (removeDash = false) => {
	const id = uuid();
	return removeDash ? id.replaceAll("-", "") : id;
};

export default getId;
