import React, { FC } from 'react'
import { StyledCard } from './styles'
import { CardProps } from '../../@types/CardHome'




const CardWrapper:FC<CardProps> = ({children, width, height}) => {
  return (
    <div>
        <StyledCard width={width} height={height}>
            {children}
        </StyledCard>
      
    </div>
  )
}

export default CardWrapper
