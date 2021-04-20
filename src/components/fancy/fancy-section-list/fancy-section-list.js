import React from "react";
import { FancyButton, FancySectionPanel } from "@fancy-components";
import { isFunc } from "@12luckydev/utils";
import arrayHandler, { ARRAY_OPERATION } from "@12luckydev/array-handler";
import { getId } from "@utils";

const defaultGetNew = () => ({ id: getId() });

const FancySectionList = ({
	value = [],
	onChange,
	name,
	keyPropName = "id",
	getNew = defaultGetNew,
	...panelProps
}) => {
	const onChangeHandler = (newValue) => {
		if (isFunc(onChange)) {
			onChange(newValue, name);
		}
	};

	const onSectionChangeHandler = (newValue, index) => {
		onChangeHandler(
			arrayHandler(value, ARRAY_OPERATION.EDIT_AT, {
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
					onChange={onSectionChangeHandler}
					{...panelProps}
				/>
			))}
			{
				<FancyButton
					text="ADD"
					onClick={() =>
						onChangeHandler(
							arrayHandler(value, ARRAY_OPERATION.ADD, { newValue: getNew() })
						)
					}
				/>
			}
		</>
	);
};

export default FancySectionList;
