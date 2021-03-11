import React from "react";
import { FIELD_TYPES, DAY_FORM_TYPES, DAY_FORM_OPTIONS } from "@consts";
import { FancyFormField } from "@fancy-components";
import DayInfoSubform from "./day-info-subform";

const DaySubform = ({ model, getFormProps }) => {
  const { dayFormType, day, daysAmount } = model;
  return (
    <>
      <FancyFormField
        type={FIELD_TYPES.SELECT}
        data={DAY_FORM_OPTIONS}
        {...getFormProps("dayFormType")}
      />
      {dayFormType === DAY_FORM_TYPES.RANGE && (
        <FancyFormField
          type={FIELD_TYPES.NUMBER}
          labelText="Days range length"
          {...getFormProps("daysAmount")}
        />
      )}
      Day: {day}{" "}
      {dayFormType === DAY_FORM_TYPES.RANGE &&
        daysAmount !== null &&
        `- ${day + daysAmount}`}
      <FancyFormField
        component={DayInfoSubform}
        type={FIELD_TYPES.ARRAY}
        data={[{}]}
        name="dayInfo"
      />
    </>
  );
};

export default DaySubform;
