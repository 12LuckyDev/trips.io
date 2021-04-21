import React from "react";
import FancyFormField from "./fancy-form-field";

const FancyFormFieldsList = ({ data = [] }) =>
	data.map((fieldProps) => <FancyFormField {...fieldProps} />);

export default FancyFormFieldsList;
