import styled, { css } from 'styled-components';

export const SidebarContainer = styled.div<{ open: boolean }>`
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

  @media (max-width: 480px) {
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    width: 250px;
    padding-top: 0;
  }
`;

export const IconContainer = styled.div<{ open: boolean }>`
  position: fixed;
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

  @media (max-width: 480px) {
    left: ${({ open }) => (open ? '250px' : '0')};
  }
`;

const baseStyles = css<{ open: boolean }>`
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

const svgStyles = css<{ open: boolean }>`
  margin-right: 10px;
  transition: margin-right 0.3s;
`;

const spanStyles = css<{ open: boolean }>`
  display: ${({ open }) => (open ? 'inline' : 'none')};
`;

const mediaQueries = css<{ open: boolean }>`
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding: 10px 0;
    margin-top: 1rem;

    svg {
      margin-right: ${({ open }) => (open ? '10px' : '10px')}; // Ajuste para manter o ícone visível
    }
  }

  @media (max-width: 480px) {
    &:nth-child(1) {
      margin-top: 7rem;
    }

    ${({ open }) => !open && `
      justify-content: center;
    `}
  }

  @media (min-width: 769px) {
    justify-content: flex-end;
    svg {
      margin-left: 10px;
      margin-right: 0;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    justify-content: flex-end;
    span {
      margin-left: 10px;
      margin-right: 0;
    }
  }
`;

export const MenuItem = styled.div<{ open: boolean }>`
  ${baseStyles}

  svg {
    ${svgStyles}
  }

  span {
    ${spanStyles}
  }

  ${mediaQueries}
`;
