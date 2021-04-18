import React from "react";
import { FancyFormField } from "@fancy-components";
import { FIELD_TYPES } from "@consts";
import { isFunc } from "@12luckydev/utils";
import { Column } from "@styled-components";

// TODO
// move up/down
// delete

const FancySectionPanel = ({
	options,
	value,
	typePropName,
	typeChangeHandler,
	index,
	onChange,
	component: Component,
	componentProps,
}) => {
	const onChangeHandler = (value) => {
		onChange(value, index);
	};
	const onTypeChangeHandler = (propValue, propName) => {
		const newValue = isFunc(typeChangeHandler)
			? {
					...typeChangeHandler(propValue, value),
					[propName]: propValue,
			  }
			: { ...value, [propName]: propValue };
		onChangeHandler(newValue);
	};

	return (
		<Column border>
			<FancyFormField
				type={FIELD_TYPES.SELECT}
				data={options}
				value={value[typePropName]}
				name={typePropName}
				onChange={onTypeChangeHandler}
			/>
			<Component model={value} onChange={onChangeHandler} {...componentProps} />
		</Column>
	);
};

export default FancySectionPanel;
