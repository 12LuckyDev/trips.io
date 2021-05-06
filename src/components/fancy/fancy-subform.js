import React from "react";
import { FancyFormFieldsList } from "@fancy-components";
import { useSubform } from "@hooks";

const FancySubform = ({ model, onChange, config, namespace }) => {
	const { inputsProps } = useSubform(model, onChange, {
		config,
		namespace,
	});

	return <FancyFormFieldsList data={inputsProps} />;
};

export default FancySubform;
