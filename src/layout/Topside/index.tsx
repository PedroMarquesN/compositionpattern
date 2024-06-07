import React, { ReactNode } from 'react';
import { LogoComponent } from './Logo';
import { Dropdown, NavbarContainer, ProfileIcon } from './style';






interface NavbarProps {
  children: ReactNode;
  profileIconSrc: string;
  dropdownContent: ReactNode;
  Logo: string;
}

const Navbar: React.FC<NavbarProps> = ({ children, profileIconSrc, dropdownContent, Logo }) => {
  return (
    <NavbarContainer>
      <LogoComponent src={Logo} />
      <div>
        <ProfileIcon src={profileIconSrc} alt="Profile Icon" />
        <Dropdown>{dropdownContent}</Dropdown>
      </div>
    </NavbarContainer>
  );
};


export default Navbar;
