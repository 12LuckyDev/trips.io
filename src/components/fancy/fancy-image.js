import React from "react";
import { CustomImage } from "@custom-components";
import { StyledImage } from "@styled-components";

const FancyImage = ({
	percentWidth,
	centerAbsolute,
	src,
	alt = "",
	...props
}) => {
	return (
		<CustomImage
			alt={alt}
			src={src}
			componentProps={{ percentWidth, centerAbsolute }}
			component={StyledImage}
			{...props}
		/>
	);
};

export default FancyImage;
