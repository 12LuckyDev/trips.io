import React from "react";
import { FancyImage } from "@fancy-components";
import RatioImageEditor from "./ratio-image-editor";
import styled from "styled-components";

const SlidesWrapper = styled.div`
	height: 100%;
	display: ${({ show }) => (show ? "flex" : "none")};
	justify-content: center;
	align-items: center;
`;

const GalleryImage = ({ image, show, fitScreen, ratio }) => {
	return fitScreen ? (
		<SlidesWrapper show={show}>
			<FancyImage src={image.imgUrl} />
		</SlidesWrapper>
	) : (
		<RatioImageEditor
			image={image}
			show={show}
			heightUnits={ratio.height}
			widthUnits={ratio.width}
		/>
	);
};

export default GalleryImage;
