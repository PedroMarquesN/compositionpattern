import React, { MouseEventHandler, useState } from 'react';
import styled from 'styled-components';
import { FiHome, FiSettings } from 'react-icons/fi';
import { ArrowLeftIcon, ArrowRightIcon } from '../../assets/arrows';
import { itemsMenu } from './itemsMenu';

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
  cursor: pointer;

  &:hover {
    background-color: #bbb7b7;
  }
  svg {
    margin-right: ${({ open }) => (open ? '10px' : '0')};
    transition: margin-right 0.3s; 
  }
  span {
    display: ${({ open }) => (open ? 'inline' : 'none')};
  }

  @media (max-width: 768px) {
    justify-content: flex-start; 
    padding: 10px 0;
    margin-top: 1rem;
    svg {
      margin-right: 0;
    }
  }

  @media (max-width: 480px) {
    margin-top: 5rem;
    span {
      display: ${({ open }) => (open ? 'inline' : 'none')};
    }
    ${({ open }) => !open && 'display: none;'}
  }

  @media (min-width: 481px) and (max-width: 768px) {
    
    span {
      display: inline;
    }
  }

  @media (min-width: 769px) {
    span {
      display: ${({ open }) => (open ? 'inline' : 'none')};
    }
  }
`;


interface SidebarProps {
  open: boolean,
  onToggle: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ open, onToggle }) => {
  return (
    <>
      <SidebarContainer open={open} onClick={onToggle}>
        {itemsMenu.map((item, index) => (
          <MenuItem key={index} open={open}>
            <item.icon size={24} />
            <span>{item.label}</span>
          </MenuItem>
        ))}
      </SidebarContainer>
      <IconContainer open={open} onClick={onToggle}>
        {open ? <ArrowRightIcon /> : <ArrowLeftIcon />}
      </IconContainer>
    </>
  );
};

export default Sidebar;
