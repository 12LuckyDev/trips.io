import React from "react";
import { StyledIcoButton } from "@styled-components";
import { CustomButton } from "@custom-components";

const IcoBase = ({
	children,
	disabled,
	componentProps = {},
	component = StyledIcoButton,
	...rest
}) => (
	<CustomButton
		component={component}
		componentProps={{ disabled, ...componentProps }}
		{...rest}
	>
		{children}
	</CustomButton>
);

export default IcoBase;
