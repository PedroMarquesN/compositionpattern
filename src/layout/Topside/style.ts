import styled from 'styled-components';

import LogoImg from '../../assets/logo.png';

interface NavbarProps {
  
}

export const NavbarContainer = styled.div<NavbarProps>`

  display: flex;
  background-color: #333;
  height: 9rem;
  width: 100%;
  

`;



export const Logo = styled.img`
  width: 130px;
  margin: 0 auto;
`;

