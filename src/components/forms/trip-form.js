import React from "react";
import { FancyForm, FancyFormField, FancyList } from "@fancy-components";
import SectionSubform from "./section-subform";
import { firestore } from "@services";
import { useForm } from "@hooks";
import { FIELD_TYPES } from "@consts";

const formConfig = [
  { name: "title", type: FIELD_TYPES.TEXT, labelText: "Trip title" },
  { name: "text", type: FIELD_TYPES.TEXT, labelText: "Trip description" },
  {
    name: "sections",
    type: FIELD_TYPES.ARRAY,
    component: SectionSubform,
    modelPropName: "model",
    getNew: () => ({ day: 1 }),
  },
  {
    name: "test",
    type: FIELD_TYPES.SELECT,
    data: [
      { id: "DAY", name: "Day" },
      { id: "INFO", name: "Info" },
    ],
  },
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
