import React from "react";
import { Row } from "@styled-components";
import { useSubform } from "@hooks";
import { FancyFormField } from "@fancy-components";
import { FIELD_TYPES, DAY_INFO_OPTIONS } from "@consts";

const DayInfoSubform = (props) => {
  const { getFieldProps } = useSubform(props);

  return (
    <Row border>
      <FancyFormField
        {...getFieldProps("dayInfoType", {
          type: FIELD_TYPES.SELECT,
          data: DAY_INFO_OPTIONS,
        })}
      />
    </Row>
  );
};

export default DayInfoSubform;
