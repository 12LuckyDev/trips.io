import { CustomRangeInput } from "@custom-components";
import React from "react";
import { FancyLabel } from "@fancy-components";
import { StyledRangeInput } from "@styled-components";

const FancyRangeInput = ({ labelText, margin = true, flip, ...props }) => {
	const input = (
		<CustomRangeInput
			component={StyledRangeInput}
			componentProps={{ margin, flip }}
			{...props}
		/>
	);
	return !!labelText ? (
		<FancyLabel labelText={labelText}>{input} </FancyLabel>
	) : (
		input
	);
};

export default FancyRangeInput;
