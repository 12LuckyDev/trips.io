import React from "react";
import { CustomButton } from "@custom-components";
import { StyledButton } from "@styled-components";
import { useTranslatedLabel } from "@hooks";

const FancyButton = ({ selected, name, text, namespace, ...props }) => {
	const labelText = useTranslatedLabel(name, namespace, {
		labelText: text,
		returnNameToo: false,
	});

	return (
		<CustomButton
			{...props}
			name={name}
			text={labelText}
			component={StyledButton}
			componentProps={{ selected }}
		/>
	);
};

export default FancyButton;
