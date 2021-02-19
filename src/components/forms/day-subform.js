import React from "react";
import { FIELD_TYPES, DAY_FORM_TYPES } from "@consts";
import { FancyFormField } from "@fancy-components";
import { getFieldProps } from "@utils";

const DaySubform = (props) => {
  return (
    <>
      <FancyFormField
        type={FIELD_TYPES.SELECT}
        data={DAY_FORM_TYPES}
        {...getFieldProps("dayFormType", props)}
      />
    </>
  );
};

export default DaySubform;
