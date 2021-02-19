import React from "react";
import { isFunc } from "@12luckydev/utils";
import { FancyFormField } from "@fancy-components";
import { Column } from "@styled-components";
import { SECTION_TYPES, FIELD_TYPES } from "@consts";
import DaySubform from "./day-subform";
import { getFieldProps } from "@utils";

const SectionSubform = ({ onChange, model }) => {
  const onChangeHandler = (value, name) => {
    if (isFunc(onChange)) {
      onChange({ ...model, [name]: value });
    }
  };

  const commonProsp = { onChange: onChangeHandler, model };

  return (
    <Column>
      <FancyFormField
        type={FIELD_TYPES.SELECT}
        data={SECTION_TYPES}
        {...getFieldProps("sectionType", commonProsp)}
      />
      {model.sectionType === "DAY" && <DaySubform {...commonProsp} />}
    </Column>
  );
};

export default SectionSubform;
