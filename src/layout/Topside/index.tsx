import React from 'react';
import styled from 'styled-components';
import { FiHome, FiSettings } from 'react-icons/fi';
import { Logo, NavbarContainer } from './style';
import ImgLogo from "../../assets/logo.png"

interface NavbarProps {
  
}


const Navbar: React.FC<NavbarProps> = () => {
  return (
    <NavbarContainer >
      <Logo src={ImgLogo} alt="Logo Image"/> 
    </NavbarContainer>
  );
};

export default Navbar;
