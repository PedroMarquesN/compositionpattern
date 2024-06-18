import React, { FC } from 'react'
import { ImgLogo } from '../styles'
import LogoSafra from '../../../assets/logoSafra.png'

const Logo:FC = () => {
  return (
    <ImgLogo src={LogoSafra} alt='Logo da BoaSafra' />
  )
}

export default Logo;