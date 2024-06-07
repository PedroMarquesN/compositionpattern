import { SidebarProps } from "../../@types/Sidebar";
import SidebarIcon from "./SidebarIcon";
import SidebarMenu from "./SidebarMenu";
import { Overlay } from "./style";

const NewSidebar: React.FC<SidebarProps> & {
    Menu: React.FC<{ open: boolean }>,
    Icon: React.FC<{ open: boolean, onClick: () => void }>
} = ({ open, onToggle }) => {
  return (
    <>
      <Overlay open={open} onClick={onToggle}/>
      <SidebarMenu open={open} />
      <SidebarIcon open={open} onClick={onToggle} />
    </>
  );
};

NewSidebar.Menu = SidebarMenu;
NewSidebar.Icon = SidebarIcon;

export default NewSidebar;