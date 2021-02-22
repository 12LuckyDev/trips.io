import React from "react";
import { FIELD_TYPES, DAY_FORM_TYPES } from "@consts";
import { FancyFormField } from "@fancy-components";
import { getFieldProps } from "@utils";

const DaySubform = (props) => {
  const { model } = props;
  console.log(model);
  //TODO change "RANGE" to use const
  //TODO numeric input
  return (
    <>
      <FancyFormField
        type={FIELD_TYPES.SELECT}
        data={DAY_FORM_TYPES}
        {...getFieldProps("dayFormType", props)}
      />
      {model.dayFormType === "RANGE" && (
        <FancyFormField
          type={FIELD_TYPES.TEXT}
          labelText="Days range length"
          {...getFieldProps("daysAmount", props)}
        />
      )}
      Day: {model.day}{" "}
      {model.dayFormType === "RANGE" &&
        Number.isInteger(parseInt(model.daysAmount)) &&
        `- ${model.day + parseInt(model.daysAmount)}`}
    </>
  );
};

export default DaySubform;
