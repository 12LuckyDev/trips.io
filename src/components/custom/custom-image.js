import React from "react";

const CustomImage = ({
	component: Component,
	componentProps,
	className,
	alt = "",
	...rest
}) =>
	!!Component ? (
		<Component alt={alt} {...componentProps} {...rest} />
	) : (
		<img className={className} alt={alt} {...rest} />
	);

export default CustomImage;
