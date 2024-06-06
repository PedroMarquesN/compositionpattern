import styled from 'styled-components';

import LogoImg from '../../assets/logo.png';

interface NavbarProps {
  
}

export const NavbarContainer = styled.div<NavbarProps>`
  background-color: #333;
  height: 80px;
  width: 100%;

`;



export const Logo = styled.img`
  background-image: url(${LogoImg});
  width: 130px;
  height: ${({ theme }) => theme.space[10]};
`;


