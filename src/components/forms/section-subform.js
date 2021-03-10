import React from "react";
import { isFunc } from "@12luckydev/utils";
import { FancyFormField } from "@fancy-components";
import { Column } from "@styled-components";
import { FIELD_TYPES, SECTION_OPTIONS } from "@consts";
import DaySubform from "./day-subform";
import { getFieldProps } from "@utils";

const SectionSubform = ({ onChange, model }) => {
  const onChangeHandler = (value, name) => {
    if (isFunc(onChange)) {
      const newModel = { ...model, [name]: value };
      switch (name) {
        case "sectionType":
          if (value === "DAY") {
            newModel.dayFormType = "SINGLE";
          } else {
            newModel.dayFormType = null;
            newModel.day = null;
            newModel.daysAmount = null;
          }
          break;
        case "dayFormType":
          if (value === "RANGE") {
            newModel.daysAmount = 1;
          } else {
            newModel.daysAmount = null;
          }
          break;
        default:
          break;
      }

      onChange(newModel);
    }
  };

  const commonProsp = { onChange: onChangeHandler, model };

  return (
    <Column border>
      <FancyFormField
        type={FIELD_TYPES.SELECT}
        data={SECTION_OPTIONS}
        {...getFieldProps("sectionType", commonProsp)}
      />
      {model.sectionType === "DAY" && <DaySubform {...commonProsp} />}
    </Column>
  );
};

export default SectionSubform;
