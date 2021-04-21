import React from "react";
import { FancyButton } from "@fancy-components";
import { isArray, isFunc, isObject } from "@12luckydev/utils";
import arrayHandler, { ARRAY_OPERATION } from "@12luckydev/array-handler";
import { getId } from "@utils";
import FancySectionPanel from "./fancy-section-panel";
import FancySectionSelect from "./fancy-section-select";

const defaultGetNew = () => ({ id: getId() });

const FancySectionList = ({
	value = [],
	onChange,
	name,
	keyPropName = "id",
	getNew = defaultGetNew,
	typePropName,
	options,
	sectionsConfig,
	keepFieldsKeys,
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
					options={options}
					sectionsConfig={sectionsConfig}
					keepFieldsKeys={keepFieldsKeys}
					typePropName={typePropName}
					{...panelProps}
				/>
			))}
			{isArray(options, false) && isObject(sectionsConfig, false) ? (
				<FancySectionSelect
					labelText={"New section type"}
					options={options}
					sectionsConfig={sectionsConfig}
					keepFieldsKeys={keepFieldsKeys}
					typePropName={typePropName}
					getNew={getNew}
					onChange={(newValue) =>
						onChangeHandler(ARRAY_OPERATION.ADD, { newValue })
					}
				/>
			) : (
				<FancyButton
					text="ADD"
					onClick={() =>
						onChangeHandler(ARRAY_OPERATION.ADD, { newValue: getNew() })
					}
				/>
			)}
		</>
	);
};

export default FancySectionList;
