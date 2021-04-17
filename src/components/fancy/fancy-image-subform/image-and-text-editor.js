import React, { useState } from "react";
import { Row, Column } from "@styled-components";
import { FancyFormField, FancyImage, FancyRangeInput } from "@fancy-components";
import { DIRECTION_OPTIONS, DIRECTION_TYPES, FIELD_TYPES } from "@consts";

const ImageAndTextEditor = ({ img, onChange, width, side }) => {
	const [localWidth, setLocalWidth] = useState(width);

	if (img.length === 0) {
		return null;
	}
	const currentImage = img[0];

	const onTextChange = (value) => {
		onChange([{ ...currentImage, text: value }], "img");
	};

	const onChangeWidthFinish = (newWidth) => {
		onChange(newWidth, "width");
	};

	const imageComponent = <FancyImage src={currentImage.imgUrl} />;
	const textComponent = (
		<FancyFormField
			type={FIELD_TYPES.TEXT}
			inputType="textarea"
			onChange={onTextChange}
			value={currentImage.text}
		/>
	);
	return (
		<>
			<FancyFormField
				type={FIELD_TYPES.SELECT}
				data={DIRECTION_OPTIONS}
				value={side}
				name={"side"}
				onChange={onChange}
			/>
			<FancyRangeInput
				min={0}
				max={100}
				value={localWidth}
				margin={false}
				onChange={setLocalWidth}
				onChangeFinish={onChangeWidthFinish}
				flip={side === DIRECTION_TYPES.RIGHT}
			/>
			<Row>
				<Column
					width={side === DIRECTION_TYPES.LEFT ? localWidth : 100 - localWidth}
				>
					{side === DIRECTION_TYPES.LEFT ? imageComponent : textComponent}
				</Column>
				<Column
					width={side === DIRECTION_TYPES.LEFT ? 100 - localWidth : localWidth}
				>
					{side === DIRECTION_TYPES.RIGHT ? imageComponent : textComponent}
				</Column>
			</Row>
		</>
	);
};

export default ImageAndTextEditor;
