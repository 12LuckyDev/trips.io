import React from "react";
import { FancyForm, FancyFormFieldsList } from "@fancy-components";
import { firestore } from "@services";
import { useForm } from "@hooks";
import tripFormConfig from "./config/trip-form-config";

const TripForm = ({ onSuccess }) => {
	const { inputsProps, model } = useForm(tripFormConfig, { namespace: "trip" });
	const onSubmit = () => {
		firestore.collection("trips").add(model).then(onSuccess);
	};
	return (
		<FancyForm onSubmit={onSubmit}>
			<FancyFormFieldsList data={inputsProps} />
		</FancyForm>
	);
};

export default TripForm;
