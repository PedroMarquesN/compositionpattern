import React from 'react';
import { LogoComponent } from './Logo';
import {NavbarContainer, SettingsIcon} from './style';
import { NavbarProps } from '../../@types/Navbar';




const Navbar: React.FC<NavbarProps> = ({Logo}) => {
  return (
    <NavbarContainer>
      <LogoComponent src={Logo} />
      <SettingsIcon size="24" />
    </NavbarContainer>
  );
};


export default Navbar;
