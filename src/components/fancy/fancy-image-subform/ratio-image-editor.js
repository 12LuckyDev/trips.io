import React from "react";
import { FancyImage, FancyRatioWrapper, CancelButton } from "@fancy-components";
import { isFunc } from "@12luckydev/utils";

const RatioImageEditor = ({
	image,
	index,
	onClick,
	onDelete,
	width,
	widthUnits = 4,
	heightUnits = 3,
	border,
	show = true,
	showDelete = true,
}) => {
	const onDeleteHandler = () => {
		onDelete(image, index);
	};

	return (
		<FancyRatioWrapper
			border={border}
			widthUnits={widthUnits}
			heightUnits={heightUnits}
			widthPercent={width}
			onClick={onClick}
			name={index}
			show={show}
		>
			<FancyImage centerAbsolute src={image.imgUrl} />
			{isFunc(onDelete) && showDelete && (
				<CancelButton onClick={onDeleteHandler} />
			)}
		</FancyRatioWrapper>
	);
};

export default RatioImageEditor;
