import { isFunc } from "@12luckydev/utils";

const modelChangeHelper = (model, { name, value, modelChangeHandler } = {}) => {
	const newModel = {
		...model,
		[name]: value,
	};

	return isFunc(modelChangeHandler)
		? modelChangeHandler({
				newValue: value,
				propName: name,
				oldModel: model,
				newModel,
		  })
		: newModel;
};

export default modelChangeHelper;
