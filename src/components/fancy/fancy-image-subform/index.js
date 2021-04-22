import React, { useState, useEffect } from "react";
import { Column } from "@styled-components";
import {
	IMAGE_FORM_OPTIONS,
	FIELD_TYPES,
	IMAGE_FORM_TYPES,
	GALLERY_DISPLAY_TYPES,
	DIRECTION_TYPES,
} from "@consts";
import GalleryEditor from "./gallery-editor";
import ImageAndTextEditor from "./image-and-text-editor";
import { popByIndex } from "@12luckydev/utils";
import { FancyFormField } from "@fancy-components";
import { revokeUrisIfExist, fillImagesUrls } from "@utils";
import SingleImageEditor from "./single-image-editor";
import FancyImageInput from "./fancy-image-input";

const reduceImgToSingle = (img) => {
	if (img.length > 0) {
		const [singleImg, toDelete] = popByIndex(img, 0);
		revokeUrisIfExist(toDelete);
		return [{ ...singleImg, text: "" }];
	}
	return img;
};

const modelHandler = (model, value, name) => {
	const newModel = { ...model, [name]: value };
	switch (name) {
		case "type":
			if (model.type !== value) {
				if (newModel.type === IMAGE_FORM_TYPES.SINGLE) {
					return {
						...newModel,
						img: reduceImgToSingle(newModel.img),
						width: 75,
						galleryType: null,
						largest: null,
						side: null,
					};
				} else if (newModel.type === IMAGE_FORM_TYPES.WITH_TEXT) {
					return {
						...newModel,
						img: reduceImgToSingle(newModel.img),
						width: 50,
						galleryType: null,
						largest: null,
						side: DIRECTION_TYPES.LEFT,
					};
				} else if (newModel.type === IMAGE_FORM_TYPES.GALLERY) {
					return {
						...newModel,
						width: null,
						galleryType: GALLERY_DISPLAY_TYPES.FIT_WIDTHEST,
						largest: { width: 0, height: 0 },
						side: null,
					};
				}
			}

			return newModel;

		default:
			return newModel;
	}
};

const FancyImageSubform = ({ model, onChange, name }) => {
	const { type, img, width, galleryType, largest, side } = model;
	const multiple = type === IMAGE_FORM_TYPES.GALLERY;

	//TODO on edit get async images from storage
	const [localImg, setLocalImg] = useState(fillImagesUrls(img));
	useEffect(() => setLocalImg(fillImagesUrls(img)), [img]);

	const onChangeHandler = (value, propName) => {
		onChange(modelHandler(model, value, propName), name);
	};

	return (
		<Column>
			<FancyFormField
				type={FIELD_TYPES.SELECT}
				options={IMAGE_FORM_OPTIONS}
				value={type}
				name={"type"}
				onChange={onChangeHandler}
			/>

			<FancyImageInput
				multiple={multiple}
				onChange={onChangeHandler}
				name="img"
				value={img}
			/>
			{type === IMAGE_FORM_TYPES.SINGLE && (
				<SingleImageEditor
					img={localImg}
					width={width}
					onChange={onChangeHandler}
				/>
			)}
			{type === IMAGE_FORM_TYPES.GALLERY && (
				<GalleryEditor
					multiple={type === IMAGE_FORM_TYPES.GALLERY}
					img={localImg}
					largest={largest}
					galleryType={galleryType}
					onChange={onChangeHandler}
				/>
			)}
			{type === IMAGE_FORM_TYPES.WITH_TEXT && (
				<ImageAndTextEditor
					img={localImg}
					width={width}
					side={side}
					onChange={onChangeHandler}
				/>
			)}
		</Column>
	);
};

export default FancyImageSubform;
