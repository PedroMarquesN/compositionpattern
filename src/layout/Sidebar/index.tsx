import React, { MouseEventHandler, useState } from 'react';
import styled from 'styled-components';
import { FiHome, FiSettings } from 'react-icons/fi';
import { ArrowLeftIcon, ArrowRightIcon } from '../../assets/arrows';
import { itemsMenu } from './itemsMenu';
import { IconContainer, MenuItem, SidebarContainer } from './style';
import { SidebarProps } from '../../@types/Sidebar';



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
