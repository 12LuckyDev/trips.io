import React from "react";
import { CustomInput, CustomTextarea } from "@custom-components";
import {
	StyledInput,
	StyledLabel,
	StyledLabelText,
	StyledTextarea,
} from "@styled-components";
import { useTranslation } from "react-i18next";

const FancyInput = ({
	inputType,
	labelText,
	name,
	namespace,
	...restProps
}) => {
	const { t } = useTranslation();

	const commonProps = {
		name,
		labelText: labelText ?? (namespace ? t(`${namespace}:${name}`) : null),
	};
	console.log(namespace, commonProps);
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
