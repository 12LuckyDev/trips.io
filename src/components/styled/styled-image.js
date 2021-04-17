import styled, { css } from "styled-components";

const StyledImage = styled.img`
	max-width: 100%;
	max-height: 100%;
	${({ percentWidth }) =>
		(!!percentWidth || percentWidth === 0) && `width: ${percentWidth}%;`}
	height: auto;
	${({ centerAbsolute }) =>
		centerAbsolute &&
		css`
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		`}
`;

export default StyledImage;
