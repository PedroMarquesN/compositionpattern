import React from 'react'
import { Center, CenterCode, CenterContainer, CenterIcon, CenterLocation } from './styles'
import { centerList } from './CenterList'

const VolumeCenterContainer = () => {
  return (
    <CenterContainer>
      {centerList.map((center, index) => {
                return (
                  <Center key={index}>
                    <CenterIcon src={center.icon} alt="icon" />
                    <CenterCode>{center.code}</CenterCode>
                    <CenterLocation>{center.Location}</CenterLocation>
                  </Center>
                )
      })}
    </CenterContainer>
  )
}

export default VolumeCenterContainer