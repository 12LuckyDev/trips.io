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

const customChangeAction = (value, name) => {
  switch (name) {
    case "sectionType":
      if (value === SECTION_TYPES.DAY) {
        return {
          dayFormType: DAY_FORM_TYPES.SINGLE,
        };
      }
      return {
        dayFormType: null,
        day: null,
        daysAmount: null,
      };
    case "dayFormType":
      if (value === DAY_FORM_TYPES.RANGE) {
        return {
          daysAmount: 1,
        };
      }
      return {
        daysAmount: null,
      };
    default:
      return null;
  }
};

const SectionSubform = ({ onChange, model }) => {
  const { getFieldProps } = useSubform({
    model,
    onChange,
    customChangeAction,
  });

  return (
    <Column border>
      <FancyFormField
        type={FIELD_TYPES.SELECT}
        data={SECTION_OPTIONS}
        {...getFieldProps("sectionType")}
      />
      {model.sectionType === "DAY" && (
        <DaySubform model={model} getFieldProps={getFieldProps} />
      )}
    </Column>
  );
};

export default SectionSubform;
