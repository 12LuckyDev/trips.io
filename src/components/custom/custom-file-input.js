import React, { useRef } from "react";
import { isFunc } from "@12luckydev/utils";

const CustomFileInput = ({ onChange, name, multiple }) => {
	const fileInput = useRef();

	const onChangeHandler = () => {
		const { files } = fileInput.current;
		const filesArray = files ? Array.from(files) : [];
		if (filesArray.length > 0 && isFunc(onChange)) {
			onChange(filesArray, name);
		}
	};

	return (
		<input
			ref={fileInput}
			type="file"
			multiple={multiple}
			onChange={onChangeHandler}
		/>
	);
};

export default CustomFileInput;
