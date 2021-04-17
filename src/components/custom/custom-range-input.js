import React, { useState, useEffect, useRef } from "react";
import { isFunc } from "@12luckydev/utils";

const CustomRangeInput = ({
	className,
	component: Component,
	componentProps,
	name,
	onChange,
	onChangeFinish,
	value,
}) => {
	const hasOnChange = isFunc(onChange);
	const [mouseClicked, setMouseClicked] = useState(false);
	const [internalValue, setInternalValue] = useState(value);
	const prevValue = useRef(value);

	useEffect(() => {
		if (
			!hasOnChange &&
			prevValue.current !== value &&
			value !== internalValue
		) {
			prevValue.current = value;
			setInternalValue(value);
		}
	}, [value, internalValue, hasOnChange]);

	const onInputHandler = (e) => {
		if (mouseClicked) {
			if (hasOnChange) {
				onChange(e.target.value, name);
			} else {
				setInternalValue(e.target.value);
			}
		}
	};

	const onMouseUp = () => {
		if (isFunc(onChangeFinish)) {
			onChangeFinish(hasOnChange ? value : internalValue);
		}
		setMouseClicked(false);
	};

	const props = {
		type: "range",
		onInput: onInputHandler,
		value: hasOnChange ? value : internalValue,
		onMouseDown: () => setMouseClicked(true),
		onMouseUp,
	};

	return !!Component ? (
		<Component {...componentProps} {...props} />
	) : (
		<input className={className} {...props} />
	);
};

export default CustomRangeInput;
