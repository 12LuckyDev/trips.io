import React from "react";
import { FancyButtonsGroupRow, FancyLabel } from "@fancy-components";
import { Column } from "@styled-components";
import { useTranslatedLabel } from "@hooks";

const FancyButtonsGroup = ({
	labelText,
	name,
	namespace,
	...buttonsRowProps
}) => {
	const translatedLabelText = useTranslatedLabel(name, namespace, {
		labelText,
		returnNameToo: false,
	});

	const buttons = (
		<FancyButtonsGroupRow
			name={name}
			namespace={namespace}
			{...buttonsRowProps}
		/>
	);
	return !!labelText ? (
		<Column>
			<FancyLabel labelText={translatedLabelText} />
			{buttons}
		</Column>
	) : (
		buttons
	);
};

export default FancyButtonsGroup;
