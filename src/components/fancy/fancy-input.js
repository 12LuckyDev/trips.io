import React from "react";
import { CustomInput, CustomTextarea } from "@custom-components";
import {
	StyledInput,
	StyledLabel,
	StyledLabelText,
	StyledTextarea,
} from "@styled-components";
import { useTranslatedLabel } from "@hooks";

const FancyInput = ({
	inputType,
	labelText,
	name,
	namespace,
	...restProps
}) => {
	const commonProps = useTranslatedLabel(name, namespace, { labelText });

	if (inputType === "textarea") {
		return (
			<CustomTextarea
				labelComponent={StyledLabel}
				labelTextComponent={StyledLabelText}
				textareaComponent={StyledTextarea}
				rows={6}
				{...restProps}
				{...commonProps}
			/>
		);
	}
	return (
		<CustomInput
			labelComponent={StyledLabel}
			labelTextComponent={StyledLabelText}
			inputComponent={StyledInput}
			type={inputType}
			{...restProps}
			{...commonProps}
		/>
	);
};

export default FancyInput;
