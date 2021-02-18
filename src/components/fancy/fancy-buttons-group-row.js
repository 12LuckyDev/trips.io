import React from "react";
import { Row } from "@styled-components";
import { FancyButton } from "@fancy-components";

const FancyButtonsGroupRow = ({
  data = [],
  idKey = "id",
  nameKey = "name",
  value,
  onChange,
  name: groupName,
}) => {
  const onChangeHandler = (value) => {
    if (typeof onChange === "function") {
      onChange(value, groupName);
    }
  };

  return (
    <Row>
      {data.map((x) => (
        <FancyButton
          key={x[idKey]}
          name={x[idKey]}
          text={x[nameKey]}
          selected={value === x[idKey]}
          onClick={onChangeHandler}
        />
      ))}
    </Row>
  );
};

export default FancyButtonsGroupRow;
