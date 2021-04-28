import React from "react";
import { PATHS } from "@consts";
import { useHistory } from "react-router-dom";
import { TripForm } from "@forms";

const NewTripPage = () => {
	const history = useHistory();

	const onSuccess = () => {
		history.push(PATHS.TRIPS);
	};

	return <TripForm onSuccess={onSuccess} />;
};

export default NewTripPage;
