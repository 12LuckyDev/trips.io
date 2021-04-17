import { isFunc } from "@12luckydev/utils";
import React from "react";
import styled, { css } from "styled-components";

// TODO add hover effect

const RatioWrapperOuter = styled.div`
	max-width: ${({ widthPercent }) => (widthPercent ? widthPercent : 100)}%;
	min-width: ${({ widthPercent }) => (widthPercent ? widthPercent : 100)}%;
	display: ${({ show }) => (show ? "block" : "none")};

	${({ border, theme }) =>
		border && `border: solid 2px ${theme.colors.primary};`}

	${({ onClick }) =>
		onClick &&
		css`
			cursor: pointer;
		`}
`;

const RatioWrapperInner = styled.div`
	width: 100%;
	padding-bottom: ${({ widthUnits = 1, heightUnits = 1 }) =>
		(heightUnits / widthUnits) * 100}%;
	position: relative;

	& > div {
		overflow: hidden;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
`;

const FancyRatioWrapper = ({
	widthUnits = 1,
	heightUnits = 1,
	widthPercent,
	children,
	onClick,
	name,
	...rest
}) => {
	const onClickHandler = () => {
		if (isFunc(onClick)) {
			onClick(name);
		}
	};

	return (
		<RatioWrapperOuter
			widthPercent={widthPercent}
			onClick={onClickHandler}
			{...rest}
		>
			<RatioWrapperInner
				centerChildren
				widthUnits={widthUnits}
				heightUnits={heightUnits}
			>
				<div>{children}</div>
			</RatioWrapperInner>
		</RatioWrapperOuter>
	);
};

export default FancyRatioWrapper;
