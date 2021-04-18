import React from "react";
import { FancyButton, FancySectionPanel } from "@fancy-components";
import { add, isFunc, editAt } from "@12luckydev/utils";
import { getId } from "@utils";

const defaultGetNew = () => ({ id: getId() });

// TODO
// add in utils editPropAt(index)
// move this to new package

const ARRAY_OPERATIONS = {
	ADD: "ADD",
	EDIT_AT: "EDIT_AT",
};

const arrayHandler = (array, operation, { newValue, index } = {}) => {
	switch (operation) {
		case ARRAY_OPERATIONS.ADD:
			return add(array, newValue);
		case ARRAY_OPERATIONS.EDIT_AT:
			return editAt(array, newValue, index);
		default:
			return array;
	}
};

const FancySectionList = ({
	value = [],
	options = [],
	component,
	onChange,
	name,
	typePropName,
	keyPropName = "id",
	getNew = defaultGetNew,
	componentProps,
	typeChangeHandler,
}) => {
	const onChangeHandler = (newValue) => {
		if (isFunc(onChange)) {
			onChange(newValue, name);
		}
	};

	const onSectionChangeHandler = (newValue, index) => {
		onChangeHandler(
			arrayHandler(value, ARRAY_OPERATIONS.EDIT_AT, {
				index,
				newValue,
			})
		);
	};

	return (
		<>
			{value.map((v, i) => (
				<FancySectionPanel
					key={v[keyPropName]}
					value={v}
					index={i}
					options={options}
					typePropName={typePropName}
					onChange={onSectionChangeHandler}
					component={component}
					componentProps={componentProps}
					typeChangeHandler={typeChangeHandler}
				/>
			))}
			{
				<FancyButton
					text="ADD"
					onClick={() =>
						onChangeHandler(
							arrayHandler(value, ARRAY_OPERATIONS.ADD, { newValue: getNew() })
						)
					}
				/>
			}
		</>
	);
};

export default FancySectionList;
