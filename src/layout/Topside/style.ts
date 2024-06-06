import styled from 'styled-components';

import LogoImg from '../../assets/logo.png';

export const TopoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${({ theme }) => theme.space[2]};
  background: ${({ theme }) => theme.colors.secondary};
`;

export const HamburgerButton = styled.button`
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
`;

export const Logo = styled.img`
  background-image: url(${LogoImg});
  width: 130px;
  height: ${({ theme }) => theme.space[10]};
`;

export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-right: ${({ theme }) => theme.space[2]};
`;

export const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.orange};
`;

