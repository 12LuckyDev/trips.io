import React from "react";
import { firestore } from "@services";
import { useHistory } from "react-router-dom";
import {
  FancyBoxContainer,
  FancyBox,
  FancyBoxText,
  FancyBoxTitle,
} from "@components";
import {
  useCollectionData,
} from "react-firebase-hooks/firestore";
import { PATHS } from "@consts";

const TripsPage = () => {
  const history = useHistory();
  const [values, loading, error] = useCollectionData(
    firestore.collection("trips"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
      idField: "id",
    }
  );
  return (
    <FancyBoxContainer>
      <FancyBox
        bgColor={"#D5CAFA"}
        onClick={() => {
          history.push(PATHS.NEW_TRIP);
        }}
      >
        <FancyBoxText>{"+"}</FancyBoxText>
      </FancyBox>
      {values &&
        values.map((box) => (
          <FancyBox key={box.id} bgColor={box.bgColor}>
            <FancyBoxTitle>{box.title}</FancyBoxTitle>
            <FancyBoxText>{box.text}</FancyBoxText>
          </FancyBox>
        ))}
    </FancyBoxContainer>
  );
};

export default TripsPage;
