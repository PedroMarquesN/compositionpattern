export interface SidebarProps {
    open: boolean,
    onToggle: () => void
  }
  
  
export interface SidebarIconProps {
    open: boolean;
    onClick: () => void;
  }


  export interface SidebarItemProps {
    icon: React.ComponentType<{ size: number }>; 
    label: string;
    open: boolean;
    onClick?: () => void; 
}

export interface SidebarMenuProps {
  open: boolean;
}
  