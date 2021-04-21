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
	const onChangeHandler = (operation, args = {}) => {
		if (isFunc(onChange)) {
			onChange(arrayHandler(value, operation, args), name);
		}
	};

	return (
		<>
			{value.map((v, i) => (
				<FancySectionPanel
					key={v[keyPropName]}
					value={v}
					index={i}
					onChange={onChangeHandler}
					first={i === 0}
					last={i === value.length - 1}
					{...panelProps}
				/>
			))}
			{
				<FancyButton
					text="ADD"
					onClick={() =>
						onChangeHandler(ARRAY_OPERATION.ADD, { newValue: getNew() })
					}
				/>
			}
		</>
	);
};

export default FancySectionList;
