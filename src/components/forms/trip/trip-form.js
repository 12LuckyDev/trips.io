import React from "react";
import { FancyForm, FancyFormFieldsList } from "@fancy-components";
import { firestore } from "@services";
import { useForm } from "@hooks";
import { tripFormConfig } from "@form-configs";

const TripFrom = ({ onSuccess }) => {
	const { inputsProps, model } = useForm(tripFormConfig);
	const onSubmit = () => {
		firestore.collection("trips").add(model).then(onSuccess);
	};
	return (
		<FancyForm onSubmit={onSubmit}>
			<FancyFormFieldsList data={inputsProps} />
		</FancyForm>
	);
};

export default TripFrom;
