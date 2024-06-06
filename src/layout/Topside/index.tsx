import React from 'react';
import styled from 'styled-components';
import { FiHome, FiSettings } from 'react-icons/fi';

interface NavbarProps {
  isOpen: boolean;
}

const NavbarContainer = styled.div<NavbarProps>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '250px' : '0')};
  width: ${({ isOpen }) => (isOpen ? 'calc(100% - 250px)' : '100%')};
  height: 57px;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: left 0.3s, width 0.3s;
`;

const NavItem = styled.div`
  color: #fff;
  font-size: 18px;
  margin-right: 20px;
  cursor: pointer;
`;

const Navbar: React.FC<NavbarProps> = ({ isOpen }) => {
  return (
    <NavbarContainer isOpen={isOpen}>
      <NavItem>
        <FiHome size={24} />
      </NavItem>
      <NavItem>
        <FiSettings size={24} />
      </NavItem>
      {/* Adicione mais itens conforme necessário */}
    </NavbarContainer>
  );
};

export default Navbar;
