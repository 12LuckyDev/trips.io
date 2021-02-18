import React from "react";
import { FancyButton } from "@fancy-components";

const SectionSubform = ({ onChange, model }) => {
  const onChangeHandler = () => {
    if (typeof onChange === "function") {
      onChange({ ...model, day: model.day + 1 });
    }
  };
  return (
    <section>
      day: {model.day}
      <FancyButton text="Edit test" onClick={onChangeHandler} />
    </section>
  );
};

export default SectionSubform;
