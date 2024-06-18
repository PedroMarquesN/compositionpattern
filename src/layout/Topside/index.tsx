import React from 'react';
import { LogoComponent } from './Logo';
import {NavbarContainer} from './style';
import { NavbarProps } from '../../@types/Navbar';



const Navbar: React.FC<NavbarProps> = ({Logo}) => {
  return (
    <NavbarContainer>
      <LogoComponent src={Logo} />
    </NavbarContainer>
  );
};


export default Navbar;
