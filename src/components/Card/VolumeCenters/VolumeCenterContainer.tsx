import React, { FC } from "react";
import {
  Center,
  CenterCode,
  CenterContainer,
  CenterIcon,
  CenterLocation,
} from "./styles";
import { centerList } from "./CenterList";
import CardContainer from "../CardContainer/CardContainer";
import { StyledH1 } from "../styles";

const VolumeCenterContainer: FC = () => {
  return (
    <CardContainer height="32rem">
      <StyledH1>Centros com volume</StyledH1>
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
