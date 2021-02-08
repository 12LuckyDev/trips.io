import React from "react";
import { FancyForm, FancyInput } from "@components";
import { firestore } from "@services";
import { useForm } from "@hooks";

const formConfig = [
  { name: "title", type: "TEXT", labelText: "Trip title" },
  { name: "text", type: "TEXT", labelText: "Trip description" },
];

const TripFrom = ({ onSuccess }) => {
  const { inputsProps, state } = useForm(formConfig);

  const onSubmit = () => {
    firestore.collection("trips").add(state).then(onSuccess);
  };

  return (
    <FancyForm onSubmit={onSubmit}>
      {inputsProps.map((props) => (
        <FancyInput {...props} />
      ))}
    </FancyForm>
  );
};

export default TripFrom;
