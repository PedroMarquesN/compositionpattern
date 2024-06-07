import { FC } from "react";
import { MenuItem } from "./style";

interface SidebarItemProps {
    icon: React.ComponentType<{ size: number }>; 
    label: string;
    open: boolean;
    onClick?: () => void; 
}
  

const SidebarItem: FC<SidebarItemProps> = ({icon: Icon, label, open}) => (
    <MenuItem open={open}>
        <Icon size={24}/>
        <span>{label}</span>
    </MenuItem>
)

export default SidebarItem;