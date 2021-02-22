import React from "react";
import { isFunc } from "@12luckydev/utils";
import { FancyFormField } from "@fancy-components";
import { Column } from "@styled-components";
import { SECTION_TYPES, FIELD_TYPES } from "@consts";
import DaySubform from "./day-subform";
import { getFieldProps } from "@utils";

// TODO maybe subsections can use context?
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
            newModel.daysAmount = "";
          }
          break;
        case "dayFormType":
          if (value === "RANGE") {
            newModel.daysAmount = "1";
          } else {
            newModel.daysAmount = "";
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
        data={SECTION_TYPES}
        {...getFieldProps("sectionType", commonProsp)}
      />
      {model.sectionType === "DAY" && <DaySubform {...commonProsp} />}
    </Column>
  );
};

export default SectionSubform;
