import React from "react";
import { FancyFormFieldsList } from "@fancy-components";
import { useSubform } from "@hooks";

const FancySubform = ({ model, onChange, config }) => {
	const { inputsProps } = useSubform(model, onChange, {
		config,
	});

	return <FancyFormFieldsList data={inputsProps} />;
};

export default FancySubform;
