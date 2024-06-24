import React from 'react';
import { Center, CenterCode, CenterContainer, CenterIcon, CenterLocation } from './styles';
import { centerList } from './CenterList';
import CardWrapper from '../CardContainer';

const VolumeCenterContainer = () => {
  return (
    <CardWrapper width='94.1rem' height='32rem' enableOverflow>
      {centerList.map((center, index) => (
        <Center key={index}>
          <CenterIcon src={center.icon} alt="icon" />
          <CenterCode>{center.code}</CenterCode>
          <CenterLocation>{center.Location}</CenterLocation>
        </Center>
      ))}
    </CardWrapper>
  );
}

export default VolumeCenterContainer;
