import React from "react";
import { FancyFormField } from "@fancy-components";
import { FIELD_TYPES, ACCOMMODATION_MEALS_OPTIONS } from "@consts";

const AccommodationInfoSubform = ({ getFieldProps }) => {
  return (
    <>
      <FancyFormField
        {...getFieldProps("name", {
          type: FIELD_TYPES.TEXT,
          labelText: "Name",
        })}
      />
      <FancyFormField
        {...getFieldProps("link", {
          type: FIELD_TYPES.TEXT,
          labelText: "Accommodation homepage",
        })}
      />
      <FancyFormField
        {...getFieldProps("price", {
          type: FIELD_TYPES.NUMBER,
          labelText: "Accommodation price",
        })}
      />
      <FancyFormField
        {...getFieldProps("meals", {
          type: FIELD_TYPES.SELECT,
          data: ACCOMMODATION_MEALS_OPTIONS,
          labelText: "Meals",
        })}
      />
      <FancyFormField
        {...getFieldProps("text", {
          type: FIELD_TYPES.TEXT,
          labelText: "Extra info",
          inputType: "textarea",
        })}
      />
    </>
  );
};

export default AccommodationInfoSubform;
