import React from "react";
import { PATHS } from "@consts";
import { useHistory } from "react-router-dom";
import { TripFrom } from "@components";

const NewTripPage = () => {
  const history = useHistory();

  const onSuccess = () => {
    history.push(PATHS.TRIPS);
  };

  return <TripFrom onSuccess={onSuccess} />;
};

export default NewTripPage;
