import React from "react";
import { FancyForm, FancyFormField, FancyList } from "@components";
import { firestore } from "@services";
import { useForm } from "@hooks";
import { FIELD_TYPES } from "@consts";

const formConfig = [
  { name: "title", type: FIELD_TYPES.TEXT, labelText: "Trip title" },
  { name: "text", type: FIELD_TYPES.TEXT, labelText: "Trip description" },
];

const TripFrom = ({ onSuccess }) => {
  const { inputsProps, state } = useForm(formConfig);

  const onSubmit = () => {
    firestore.collection("trips").add(state).then(onSuccess);
  };

  return (
    <FancyForm onSubmit={onSubmit}>
      <FancyList keyField="key" data={inputsProps} component={FancyFormField} />
    </FancyForm>
  );
};

export default TripFrom;
