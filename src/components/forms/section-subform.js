import React from "react";
import { FancyButton } from "@fancy-components";
import { isFunc } from "@12luckydev/utils";

// TODO subform hook?
const SectionSubform = ({ onChange, model }) => {
  const onChangeHandler = () => {
    if (isFunc(onChange)) {
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
