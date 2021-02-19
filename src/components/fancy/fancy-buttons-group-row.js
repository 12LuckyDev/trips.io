import React from "react";
import { Row } from "@styled-components";
import { FancyButton } from "@fancy-components";
import { isFunc } from "@12luckydev/utils";

const FancyButtonsGroupRow = ({
  data = [],
  idKey = "id",
  nameKey = "name",
  value,
  onChange,
  name: groupName,
}) => {
  const onChangeHandler = (value) => {
    if (isFunc(onChange)) {
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
