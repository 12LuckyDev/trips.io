import React, { useEffect } from "react";
import { removeByProp } from "@12luckydev/utils";
import { revokeUriIfExist, getDimensionsFromUris } from "@utils";
import GalleryCarousel from "./gallery-carousel";
import { GALLERY_DISPLAY_OPTIONS, FIELD_TYPES } from "@consts";
import { FancyFormField } from "@fancy-components";

const GalleryEditor = ({ onChange, img, galleryType, largest }) => {
	useEffect(() => {
		const getDimensions = async () => {
			const dims = await getDimensionsFromUris(img);
			const newLargest = dims.reduce((acc, cur) => {
				if (cur.width > acc.width) {
					return cur;
				} else if (cur.width === acc.width && cur.height > acc.height) {
					return cur;
				}
				return acc;
			}, largest);

			if (
				largest === null ||
				newLargest.width !== largest.width ||
				newLargest.height !== largest.height
			) {
				onChange(newLargest, "largest");
			}
		};
		getDimensions();
	}, [img, largest, onChange]);

	const onDelete = (imageToDelete) => {
		const newImages = removeByProp(img, "id", imageToDelete.id);
		onChange(newImages, "img");
		revokeUriIfExist(imageToDelete);
	};

	return (
		<>
			<FancyFormField
				type={FIELD_TYPES.SELECT}
				data={GALLERY_DISPLAY_OPTIONS}
				value={galleryType}
				name={"galleryType"}
				onChange={onChange}
			/>
			<GalleryCarousel
				img={img}
				onDelete={onDelete}
				galleryType={galleryType}
				largest={largest}
			/>
		</>
	);
};

export default GalleryEditor;
