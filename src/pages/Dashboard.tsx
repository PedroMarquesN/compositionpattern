import React, { useState } from "react";
import Navbar from "../layout/Topside";
import NewSidebar from "../layout/Sidebar/NewSidebar";

import ImagemLogo from "../assets/logobranca.png"
import ContentContainer from "./Home";

const Dashboard = () => {

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleSidebarClick = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div>
      <Navbar
        Logo={ImagemLogo}
        children={<div />}
        profileIconSrc="default_icon_src.png"
        dropdownContent={<div />}
      />
      <ContentContainer  />
    </div>
  );
};

export default Dashboard;
