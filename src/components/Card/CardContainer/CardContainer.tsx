import React, { FC } from 'react'
import { StyledCardContainer } from './styles'
import { CardProps } from '../../../@types/CardHome'




const CardContainer: FC<CardProps> = ({children, height, width}) => {
  return (
    <StyledCardContainer width={width} height={height}>
      {children}
    </StyledCardContainer>
  )
}

export default CardContainer
