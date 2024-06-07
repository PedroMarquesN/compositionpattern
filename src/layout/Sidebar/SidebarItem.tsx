import { FC } from "react";
import { MenuItem } from "./style";
import { SidebarItemProps } from "../../@types/Sidebar";


  

const SidebarItem: FC<SidebarItemProps> = ({icon: Icon, label, open}) => (
    <MenuItem open={open}>
        <Icon size={24}/>
        <span>{label}</span>
    </MenuItem>
)

export default SidebarItem;