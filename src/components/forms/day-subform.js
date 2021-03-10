import React from "react";
import { FIELD_TYPES, DAY_FORM_TYPES, DAY_FORM_OPTIONS } from "@consts";
import { FancyFormField } from "@fancy-components";
import { getFieldProps } from "@utils";

const DaySubform = (props) => {
  const { model } = props;

  return (
    <>
      <FancyFormField
        type={FIELD_TYPES.SELECT}
        data={DAY_FORM_OPTIONS}
        {...getFieldProps("dayFormType", props)}
      />
      {model.dayFormType === DAY_FORM_TYPES.RANGE && (
        <FancyFormField
          type={FIELD_TYPES.NUMBER}
          labelText="Days range length"
          {...getFieldProps("daysAmount", props)}
        />
      )}
      Day: {model.day}{" "}
      {model.dayFormType === DAY_FORM_TYPES.RANGE &&
        model.daysAmount !== null &&
        `- ${model.day + model.daysAmount}`}
    </>
  );
};

export default DaySubform;
