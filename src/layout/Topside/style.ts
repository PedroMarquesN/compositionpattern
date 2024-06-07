import styled from 'styled-components';

import LogoImg from '../../assets/logo.png';

interface NavbarProps {
  
}

export const NavbarContainer = styled.nav`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%; 
  @media(min-width: 768px){
    justify-content: space-around;
  }
  @media(min-width: 1024px){ 
    justify-content: space-between;
  }
`;



export const Logo = styled.img`
  width: 30%; 
  margin: 0 auto;
`;
export const ProfileIcon = styled.img`
  width: 80px;
  height: 40px;
  background-color: red;
  border-radius: 50%;
`;

export const Dropdown = styled.div`
`;
