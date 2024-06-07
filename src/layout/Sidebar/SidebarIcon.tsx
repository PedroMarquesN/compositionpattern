import { FC } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../../assets/arrows";
import { IconContainer } from "./style";
import { SidebarIconProps } from "../../@types/Sidebar";
import { FiCloudDrizzle, FiFeather } from "react-icons/fi";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";





const SidebarIcon: FC<SidebarIconProps> = ({ open, onClick }) => (
    <IconContainer open={open} onClick={onClick}>
      {open ? <MdKeyboardDoubleArrowLeft /> : <MdKeyboardDoubleArrowRight />}
    </IconContainer>
  );


export default SidebarIcon