import React from "react";
import {
  Center,
  CenterCode,
  CenterContainer,
  CenterIcon,
  CenterLocation,
} from "./styles";
import { centerList } from "./CenterList";
import CardContainer from "../CardContainer/CardContainer";

const VolumeCenterContainer = () => {
  return (
    <CardContainer width="94.1rem" height="32rem">
      <CenterContainer>
        {centerList.map((center, index) => (
          <Center key={index}>
            <CenterIcon src={center.icon} alt="icon" />
            <CenterCode>{center.code}</CenterCode>
            <CenterLocation>{center.Location}</CenterLocation>
          </Center>
        ))}
      </CenterContainer>
    </CardContainer>
  );
};

export default VolumeCenterContainer;
