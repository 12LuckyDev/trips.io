const { isArray } = require("@12luckydev/utils");

const countUsage = (option, array, propName) =>
	array.reduce((acc, cur) => (cur[propName] === option ? acc + 1 : acc), 0);

const optionsFilter = (options, array, propName, index = null) => {
	if (isArray(array, false)) {
		return options.filter(({ id, limit }) => {
			if (!limit) {
				return true;
			} else {
				const usage = countUsage(id, array, propName);
				const currentOption = index !== null ? array[index][propName] : null;
				return usage < limit || currentOption === id;
			}
		});
	}
	return options;
};

export default optionsFilter;
