import React from "react";
import { FancyRangeInput } from "@fancy-components";
import { Row, Column } from "@styled-components";

const constProps = {
	margin: false,
	min: 0,
	max: 100,
	step: 1,
};

const ImageWidthEditor = ({ onChange, onChangeFinish, value }) => {
	const valueProps = {
		value,
		onChange,
		onChangeFinish,
	};

	return (
		<Row>
			<Column width={50}>
				<FancyRangeInput {...constProps} {...valueProps} flip />
			</Column>
			<Column width={50}>
				<FancyRangeInput {...constProps} {...valueProps} />
			</Column>
		</Row>
	);
};

export default ImageWidthEditor;
