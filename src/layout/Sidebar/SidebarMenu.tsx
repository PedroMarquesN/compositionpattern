import { FC } from "react";
import { itemsMenu } from "./itemsMenu";
import SidebarItem from "./SidebarItem";
import { SidebarContainer } from "./style";
import { SidebarMenuProps } from "../../@types/Sidebar";


const SidebarMenu:FC<SidebarMenuProps> = ({ open }) => (
    <SidebarContainer open={open}>
      {itemsMenu.map((item, index) => (
        <SidebarItem key={index} icon={item.icon} label={item.label} open={open} />
      ))}
    </SidebarContainer>
  );

export default SidebarMenu