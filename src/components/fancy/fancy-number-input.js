import React from "react";
import { CustomNumberInput } from "@custom-components";
import {
	StyledNumberInput,
	StyledNumberButton,
	StyledLabel,
	StyledLabelText,
} from "@styled-components";
import { useTranslatedLabel } from "@hooks";

const FancyNumberInput = ({ name, namespace, labelText, ...props }) => {
	const commonProps = useTranslatedLabel(name, namespace, { labelText });
	console.log(namespace);
	return (
		<CustomNumberInput
			buttonsComponent={StyledNumberButton}
			inputComponent={StyledNumberInput}
			labelComponent={StyledLabel}
			labelTextComponent={StyledLabelText}
			{...props}
			{...commonProps}
		/>
	);
};

export default FancyNumberInput;
