import React from "react";
import { useSubform } from "@hooks";
import { FancyFormField } from "@fancy-components";
import { FIELD_TYPES, DAY_INFO_OPTIONS, DAY_INFO_TYPES } from "@consts";
import { AccommodationInfoSubform } from "./day-type-info-subforms";

const DayInfoSubform = ({ onChange, model }) => {
  const { getFieldProps } = useSubform({ onChange, model });
  const { dayInfoType } = model;
  let subform = null;

  switch (dayInfoType) {
    case DAY_INFO_TYPES.ACCOMMODATION:
      subform = <AccommodationInfoSubform />;
      break;
    default:
      subform = "TODO";
      break;
  }

  return (
    <>
      <FancyFormField
        {...getFieldProps("dayInfoType", {
          type: FIELD_TYPES.SELECT,
          data: DAY_INFO_OPTIONS,
        })}
      />
      {subform}
    </>
  );
};

export default DayInfoSubform;
