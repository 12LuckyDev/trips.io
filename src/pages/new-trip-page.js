import React, { useState } from "react";
import { FancyForm, FancyInput } from "@components";
import { firestore } from "@services";
import { PATHS } from "@consts";
import { useHistory } from "react-router-dom";

const NewTripPage = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const history = useHistory();

  const onSubmit = () => {
    firestore
      .collection("trips")
      .add({
        title,
        text,
      })
      .then(() => {
        history.push(PATHS.TRIPS);
      });
  };

  return (
    <FancyForm onSubmit={onSubmit}>
      <FancyInput name="title" value={title} onChange={setTitle} />
      <FancyInput name="text" value={text} onChange={setText} />
    </FancyForm>
  );
};

export default NewTripPage;
