import React, { useState } from "react";
import Navbar from "../layout/Topside";
import NewSidebar from "../layout/Sidebar/NewSidebar";
import ContentContainer from "../layout/Home";
import ImagemLogo from "../assets/logobranca.png"

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
      <NewSidebar open={sidebarOpen} onToggle={handleSidebarClick} />
      <ContentContainer open={sidebarOpen} />
    </div>
  );
};

export default Dashboard;
