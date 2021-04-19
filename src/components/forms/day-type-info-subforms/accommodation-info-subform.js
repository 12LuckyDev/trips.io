import React from "react";
import { FancyFormField, FancyImageSubform } from "@fancy-components";
import {
	FIELD_TYPES,
	ACCOMMODATION_MEALS_OPTIONS,
	IMAGE_FORM_TYPES,
} from "@consts";
import { useSubform } from "@hooks";

const AccommodationInfoSubform = ({ model, onChange }) => {
	const { getFieldProps } = useSubform({ onChange, model });

	return (
		<>
			<FancyImageSubform
				{...getFieldProps("images", {
					type: FIELD_TYPES.CUSTOM_OBJECT,
					valuePropName: "model",
					getDefault: () => ({
						type: IMAGE_FORM_TYPES.SINGLE,
						img: [],
						width: 75,
						galleryType: null,
						largest: null,
						side: null,
					}),
				})}
			/>
			<FancyFormField
				{...getFieldProps("name", {
					type: FIELD_TYPES.TEXT,
					labelText: "Name",
				})}
			/>
			<FancyFormField
				{...getFieldProps("link", {
					type: FIELD_TYPES.TEXT,
					labelText: "Accommodation homepage",
				})}
			/>
			<FancyFormField
				{...getFieldProps("price", {
					type: FIELD_TYPES.NUMBER,
					labelText: "Accommodation price",
				})}
			/>
			<FancyFormField
				{...getFieldProps("meals", {
					type: FIELD_TYPES.SELECT,
					data: ACCOMMODATION_MEALS_OPTIONS,
					labelText: "Meals",
				})}
			/>
			<FancyFormField
				{...getFieldProps("text", {
					type: FIELD_TYPES.TEXT,
					labelText: "Extra info",
					inputType: "textarea",
				})}
			/>
		</>
	);
};

export default AccommodationInfoSubform;
