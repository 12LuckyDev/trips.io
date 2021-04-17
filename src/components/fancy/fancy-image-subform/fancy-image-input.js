import React, { useState } from "react";
import { FancyFileInput, FancyInput, FancyButton } from "@fancy-components";
import { Row, Column } from "@styled-components";
import {
	mapImagesFromFiles,
	revokeUriIfExist,
	revokeUrisIfExist,
	getId,
} from "@utils";
import { isArray, merge } from "@12luckydev/utils";

const FancyImageInput = ({
	multiple,
	onChange,
	name,
	value,
	showDelete = true,
}) => {
	const [imgUrl, setImgUrl] = useState("");

	const onChangeHandler = (newImages) => {
		if (multiple) {
			onChange(merge(value, newImages), name);
		} else {
			if (isArray(value, false)) {
				revokeUriIfExist(value[0]);
			}
			onChange(newImages, name);
		}
	};

	const onUrlAddClick = () => {
		if (!!imgUrl) {
			const newImages = [{ id: getId(), imgUrl, text: "" }];
			onChangeHandler(newImages);
			setImgUrl("");
		}
	};

	const onFileChange = async (files) => {
		const newImages = await mapImagesFromFiles(files);
		onChangeHandler(newImages);
	};

	const onDelete = () => {
		onChange([], name);
		revokeUrisIfExist(value);
	};

	return (
		<Row>
			<Column width={20}>
				<FancyFileInput multiple={multiple} onChange={onFileChange} />
			</Column>
			<Column width={40}>
				<FancyInput value={imgUrl} onChange={setImgUrl} />
			</Column>
			<Column width={20}>
				<FancyButton text="Add" onClick={onUrlAddClick} />
			</Column>
			{showDelete && value.length > 0 && (
				<Column width={20}>
					<FancyButton
						text={multiple ? "Delete All" : "Delete"}
						onClick={onDelete}
					/>
				</Column>
			)}
		</Row>
	);
};

export default FancyImageInput;
