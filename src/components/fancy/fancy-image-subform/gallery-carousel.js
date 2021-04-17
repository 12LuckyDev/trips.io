import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GALLERY_DISPLAY_TYPES } from "@consts";
import GalleryImage from "./gallery-image";
import RatioImageEditor from "./ratio-image-editor";
import { FancyShiftable, NextButton, PrevButton } from "@fancy-components";

const CarouserWrapper = styled.div`
	position: relative;
	${({ fitScreen }) => fitScreen && "height: 75vh;"}
`;

const count = 6;
const elementWidth = 100 / count;

const GalleryCarousel = ({ img, onDelete, galleryType, largest }) => {
	const length = !!img ? img.length : 0;
	const fitScreen = galleryType === GALLERY_DISPLAY_TYPES.FIT_SCREEN;
	const heightPx =
		galleryType === GALLERY_DISPLAY_TYPES.FIT_WIDTHEST ? largest.height : null;

	const [index, setIndex] = useState(0);
	useEffect(() => {
		if (length > 0) {
			setIndex(length - 1);
		}
	}, [length]);

	if (length === 0) {
		return null;
	}

	const onNavClick = (name) => {
		if (name === "prev" && index > 0) {
			setIndex(index - 1);
		} else if (name === "next" && index < length - 1) {
			setIndex(index + 1);
		}
	};

	const onDeleteHandler = (image, index = 0) => {
		setIndex(index);
		onDelete(image);
	};

	return (
		<>
			<CarouserWrapper fitScreen={fitScreen} heightPx={heightPx}>
				{img.map((image, i) => (
					<GalleryImage
						key={image.id}
						show={i === index}
						fitScreen={fitScreen}
						ratio={largest}
						image={image}
					/>
				))}

				<PrevButton absolute onClick={onNavClick} hide={index === 0} />
				<NextButton absolute onClick={onNavClick} hide={index === length - 1} />
			</CarouserWrapper>
			<FancyShiftable
				elementWidth={elementWidth}
				elementsCount={length}
				visibleElementsCount={count}
			>
				{img.map((image, i) => (
					<RatioImageEditor
						border
						width={elementWidth}
						key={image.id}
						index={i}
						onDelete={onDeleteHandler}
						onClick={setIndex}
						image={image}
					/>
				))}
			</FancyShiftable>
		</>
	);
};

export default GalleryCarousel;
