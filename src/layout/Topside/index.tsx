import React from 'react';
import { LogoComponent } from './Logo';
import {LogoutButton, NavbarContainer, SettingsIcon} from './style';
import { NavbarProps } from '../../@types/Navbar';
import useLogout from '../../hooks/useLogout';
import { useUser } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';




const Navbar: React.FC<NavbarProps> = ({Logo}) => {
  const {logout} = useUser();

  return (
    <NavbarContainer>
      <Link to="/dashboard/panel">
      <LogoComponent src={Logo} />
      </Link>
      <SettingsIcon onClick={logout} size="24" />
    </NavbarContainer>
  );
};


export default Navbar;
