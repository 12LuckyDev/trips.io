import React, { useState } from "react";
import ImageWidthEditor from "./image-width-editor";
import { Column } from "@styled-components";
import { FancyImage } from "@fancy-components";

const SingleImageEditor = ({ img, width, onChange }) => {
	const [localWidth, setLocalWidth] = useState(width);

	if (img.length === 0) {
		return null;
	}
	const currentImage = img[0];

	const onChangeWidthFinish = (newWidth) => {
		onChange(newWidth, "width");
	};

	return (
		<>
			<ImageWidthEditor
				onChange={setLocalWidth}
				onChangeFinish={onChangeWidthFinish}
				value={localWidth}
			/>
			<Column center>
				<FancyImage src={currentImage.imgUrl} percentWidth={localWidth} />
			</Column>
		</>
	);
};

export default SingleImageEditor;
