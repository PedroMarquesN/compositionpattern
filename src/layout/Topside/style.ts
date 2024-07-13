import { FaCog } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';


export const LogoNav = styled.img`
  max-width: 130px;
  z-index: 99999999;
`;

export const NavbarContainer = styled.nav`
  background: linear-gradient(90deg, #97B43C 0%, #414E1A 100%);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100vw; 
  padding: 0 20px;  

`;

export const Logo = styled.img`
  width: 30%; 
  margin: 0 auto;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const SettingsIcon = styled(FaCog)`
  cursor: pointer;
  &:hover {
    animation: ${rotate} 1s linear ;
  }
`;

export const LogoutButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 8px 16px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;

  &:hover {
    background-color: #ff1a1a;
  }
`;