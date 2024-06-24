import React, { FC } from 'react'
import { StyledCard } from '../styles'
import { CardProps } from '../../../@types/CardHome'




const CardWrapper:FC<CardProps> = ({children, width, height, enableOverflow}) => {
  return (
        <StyledCard width={width} height={height} enableOverflow={enableOverflow}>
            {children}
        </StyledCard>
  )
}

export default CardWrapper
