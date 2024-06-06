// Sidebar.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { FiHome, FiSettings } from 'react-icons/fi';
import ArrowLeftDouble from '../../assets/ArrowLeftDouble.svg'; 
import ArrowRightDouble from '../../assets/ArrowRightDouble.svg'; 

const SidebarContainer = styled.div<{ open: boolean }>`
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

const IconContainer = styled.div<{ open: boolean }>`
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

const MenuItem = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  color: #fff;
  padding: 10px;
  transition: padding 0.3s;
  width: 100%;
  svg {
    margin-right: ${({ open }) => (open ? '10px' : '0')};
  }
  span {
    display: ${({ open }) => (open ? 'inline' : 'none')};
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding: 10px 0;
    svg {
      margin-right: 0;
    }
  }

  @media (max-width: 480px) {
    span {
      display: ${({ open }) => (open ? 'inline' : 'none')};
    }
    ${({ open }) => !open && 'display: none;'}
  }

  @media (min-width: 481px) and (max-width: 768px) {
    span {
      display: none;
    }
  }

  @media (min-width: 769px) {
    span {
      display: ${({ open }) => (open ? 'inline' : 'none')};
    }
  }
`;

const DoubleArrowIcon = styled.div<{ open: boolean }>`
  width: 24px;
  height: 24px;
  background: ${({ open }) => (open ? `url(${ArrowRightDouble})` : `url(${ArrowLeftDouble})`)};  background-size: cover;
`;

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SidebarContainer open={open}>
        <MenuItem open={open}>
          <FiHome size={24} />
          <span>Home</span>
        </MenuItem>
        <MenuItem open={open}>
          <FiSettings size={24} />
          <span>Settings</span>
        </MenuItem>
      </SidebarContainer>
      <IconContainer open={open} onClick={() => setOpen(!open)}>
        <DoubleArrowIcon open={open} />
      </IconContainer>
    </>
  );
};

export default Sidebar;