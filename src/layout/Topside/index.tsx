import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { LogoComponent } from './Logo';

const Logo = styled.img`
  width: 100px;
`;

const NavbarContainer = styled.nav`
  background-color: #333;
  color: #fff;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  height: 60px;
`;

const ProfileIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 60px; 
  right: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;


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
