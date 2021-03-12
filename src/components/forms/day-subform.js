import React from "react";
import { FIELD_TYPES, DAY_FORM_TYPES, DAY_FORM_OPTIONS } from "@consts";
import { FancyFormField } from "@fancy-components";
import DayInfoSubform from "./day-info-subform";

const dayFormTypeChangeHandler = (value) =>
  value === DAY_FORM_TYPES.RANGE ? { daysAmount: 1 } : { aysAmount: null };

const DaySubform = ({ model, getFieldProps }) => {
  const { dayFormType, day, daysAmount, info } = model;
  return (
    <>
      <FancyFormField
        {...getFieldProps("dayFormType", {
          type: FIELD_TYPES.SELECT,
          data: DAY_FORM_OPTIONS,
          changeHandler: dayFormTypeChangeHandler,
        })}
      />
      {dayFormType === DAY_FORM_TYPES.RANGE && (
        <FancyFormField
          {...getFieldProps("daysAmount", {
            type: FIELD_TYPES.NUMBER,
            labelText: "Days range length",
          })}
        />
      )}
      Day: {day}{" "}
      {dayFormType === DAY_FORM_TYPES.RANGE &&
        daysAmount !== null &&
        `- ${day + daysAmount}`}
      <FancyFormField
        component={DayInfoSubform}
        type={FIELD_TYPES.ARRAY}
        data={info}
        name="info"
      />
    </>
  );
};

export default DaySubform;
