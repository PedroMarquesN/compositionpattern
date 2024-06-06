// Sidebar.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { FiArrowLeft, FiArrowRight, FiHome, FiSettings } from 'react-icons/fi';

const SidebarContainer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ open }) => (open ? '250px' : '50px')};
  background-color: #333;
  transition: width 0.3s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 60px;

  @media (max-width: 480px) {
    width: ${({ open }) => (open ? '250px' : '0')};
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
  transition: left 0.3s;
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
        {/* Add more menu items here as needed */}
      </SidebarContainer>
      <IconContainer open={open} onClick={() => setOpen(!open)}>
        {open ? <FiArrowLeft size={24} /> : <FiArrowRight size={24} />}
      </IconContainer>
    </>
  );
};

export default Sidebar;
