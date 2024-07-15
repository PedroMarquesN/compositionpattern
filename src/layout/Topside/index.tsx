import React from 'react';
import { LogoComponent } from './Logo';
import {LogoutButton, NavbarContainer, SettingsIcon} from './style';
import { NavbarProps } from '../../@types/Navbar';
import useLogout from '../../hooks/useLogout';




const Navbar: React.FC<NavbarProps> = ({Logo}) => {
  const logout = useLogout();

  return (
    <NavbarContainer>
      <LogoComponent src={Logo} />
      <SettingsIcon onClick={logout} size="24" />
    </NavbarContainer>
  );
};


export default Navbar;
