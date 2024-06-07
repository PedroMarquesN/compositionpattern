import { FC } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../../assets/arrows";
import { IconContainer } from "./style";
import { SidebarIconProps } from "../../@types/Sidebar";




const SidebarIcon: FC<SidebarIconProps> = ({ open, onClick }) => (
    <IconContainer open={open} onClick={onClick}>
      {open ? <ArrowRightIcon /> : <ArrowLeftIcon />}
    </IconContainer>
  );


export default SidebarIcon