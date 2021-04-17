import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NextButton, PrevButton } from "@fancy-components";

const ShiftableWrapper = styled.div`
	display: flex;
	flex: 0 0;
	align-items: center;
`;

const ShiftableOuter = styled.div`
	overflow-x: hidden;
	flex: auto;
`;

const ShiftableInner = styled.div`
	display: flex;
	flex: 0 0;
	position: relative;
	transition: left 0.5s ease;
	left: ${({ elementWidth, index = 0, elementWidthUnit = "%" }) =>
		`${index * elementWidth * -1}${index === 0 ? "" : elementWidthUnit}`};
`;

const FancyShiftable = ({
	children,
	elementsCount,
	visibleElementsCount,
	hideArrows = true,
	...props
}) => {
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const largestIndex = elementsCount - visibleElementsCount;
		setIndex(largestIndex < 0 ? 0 : largestIndex);
	}, [elementsCount, visibleElementsCount]);

	const prevDisabled = index < 1;
	const nextDisabled = elementsCount - visibleElementsCount - index < 1;
	const onNavClick = (name) => {
		if (name === "prev" && !prevDisabled) {
			setIndex(index - 1);
		} else if (name === "next" && !nextDisabled) {
			setIndex(index + 1);
		}
	};

	return (
		<ShiftableWrapper>
			<PrevButton disabled={index < 1} onClick={onNavClick} />
			<ShiftableOuter>
				<ShiftableInner index={index} {...props}>
					{children}
				</ShiftableInner>
			</ShiftableOuter>
			<NextButton disabled={nextDisabled} onClick={onNavClick} />
		</ShiftableWrapper>
	);
};

export default FancyShiftable;
