import React from "react";
import FancyFormField from "./fancy-form-field";

const FancyFormFieldsList = ({ data = [] }) =>
	data.map(({ name, ...fieldProps }) => (
		<FancyFormField key={name} name={name} {...fieldProps} />
	));

export default FancyFormFieldsList;
