import React from "react";
import { FancyFormField } from "@fancy-components";
import { Column } from "@styled-components";
import {
  FIELD_TYPES,
  SECTION_OPTIONS,
  SECTION_TYPES,
  DAY_FORM_TYPES,
} from "@consts";
import DaySubform from "./day-subform";
import { useSubform } from "@hooks";

const sectionTypeChangeHandler = (value) => {
  if (value === SECTION_TYPES.DAY) {
    return {
      dayFormType: DAY_FORM_TYPES.SINGLE,
      info: [],
    };
  }
  return {
    dayFormType: null,
    day: null,
    daysAmount: null,
    info: [],
  };
};

const SectionSubform = ({ onChange, model }) => {
  const { getFieldProps } = useSubform({ model, onChange });

  return (
    <Column border>
      <FancyFormField
        type={FIELD_TYPES.SELECT}
        data={SECTION_OPTIONS}
        {...getFieldProps("sectionType", {
          changeHandler: sectionTypeChangeHandler,
        })}
      />
      {model.sectionType === "DAY" && (
        <DaySubform model={model} getFieldProps={getFieldProps} />
      )}
    </Column>
  );
};

export default SectionSubform;
