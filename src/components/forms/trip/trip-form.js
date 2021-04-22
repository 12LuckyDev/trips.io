import React from "react";
import { FancyForm, FancyFormFieldsList } from "@fancy-components";
import { firestore } from "@services";
import { useForm } from "@hooks";
import formConfig from "./trip-form-config";

const TripFrom = ({ onSuccess }) => {
	const { inputsProps, state } = useForm(formConfig);
	const onSubmit = () => {
		firestore.collection("trips").add(state).then(onSuccess);
	};
	return (
		<FancyForm onSubmit={onSubmit}>
			<FancyFormFieldsList data={inputsProps} />
		</FancyForm>
	);
};

export default TripFrom;
