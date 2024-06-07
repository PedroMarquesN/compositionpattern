import { SidebarProps } from "../../@types/Sidebar";
import SidebarIcon from "./SidebarIcon";
import SidebarMenu from "./SidebarMenu";

const Sisdebar: React.FC<SidebarProps> & {
    Menu: React.FC<{ open: boolean }>,
    Icon: React.FC<{ open: boolean, onClick: () => void }>
} = ({ open, onToggle }) => {
  return (
    <>
      <SidebarMenu open={open} />
      <SidebarIcon open={open} onClick={onToggle} />
    </>
  );
};

Sisdebar.Menu = SidebarMenu;
Sisdebar.Icon = SidebarIcon;

export default Sisdebar;