import styled, { css } from 'styled-components';
import { SidebarMenuProps } from '../../@types/Sidebar';

export const SidebarContainer = styled.div<SidebarMenuProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: #333;
  transition: transform 0.3s ease;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-200px)')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 60px;
  overflow: hidden;
  z-index: 1000;

  @media (max-width: 768px) {
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    width: 200px;
    padding-top: 5rem;
  }
`;

export const Overlay = styled.div<SidebarMenuProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); 
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 999; 

  @media (max-width: 768px) {
    backdrop-filter: blur(3px); 
  }

  @media (min-width: 769px) {
    display: none; 
  }
`;
export const IconContainer = styled.div<SidebarMenuProps>`
  position: fixed;
  font-size: 2rem;
  top: 50%;
  left: ${({ open }) => (open ? '250px' : '50px')};
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  color: #fff;
  cursor: pointer;
  transition: left 0.3s, margin-left 0.3s;
  margin-left: -20px;
  z-index: 1001; 

  @media (max-width: 768px) {
    margin-left: -10px;
    left: ${({ open }) => (open ? '200px' : '0')};
  }
`;

const baseStyles = css<SidebarMenuProps>`
  display: flex;
  align-items: center;
  color: #fff;
  padding: 10px;
  transition: padding 0.3s;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #bbb7b7;
  }
`;

const svgStyles = css<SidebarMenuProps>`
  margin-right: 10px;
  transition: margin-right 0.3s;
`;

const spanStyles = css<SidebarMenuProps>`
  display: ${({ open }) => (open ? 'inline' : 'none')};
`;

const mediaQueries = css<SidebarMenuProps>`
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding: 10px 0;
    margin-top: 1rem;

    svg {
      margin-right: 10px;
    }
  }

  @media (max-width: 480px) {
    ${({ open }) => !open && `
      justify-content: center;
    `}
  }

  @media (min-width: 481px) and (max-width: 768px) {
    justify-content: ${({ open }) => (open ? 'flex-start' : 'flex-end')};

    span {
      display: ${({ open }) => (open ? 'inline' : 'none')};
    }

    svg {
      margin-right: 10px;
      margin-left: 0;
    }
  }

  @media (min-width: 769px) {
    justify-content: ${({ open }) => (open ? 'flex-start' : 'flex-end')};

    svg {
      margin-left: ${({ open }) => (open ? '0' : '10px')};
      margin-right: ${({ open }) => (open ? '10px' : '0')};
    }

    span {
      display: ${({ open }) => (open ? 'inline' : 'none')};
    }
  }
`;

export const MenuItem = styled.div<SidebarMenuProps>`
  ${baseStyles}

  svg {
    ${svgStyles}
  }

  span {
    ${spanStyles}
  }

  ${mediaQueries}
`;
