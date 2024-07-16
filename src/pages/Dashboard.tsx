import React, { useState } from "react";
import Navbar from "../layout/Topside";
import NewSidebar from "../layout/Sidebar/NewSidebar";

import ImagemLogo from "../assets/logobranca.png"
import ContentContainer from "./Home";
import { Outlet } from "react-router-dom";

const Dashboard = () => {

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleSidebarClick = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div>
      <Navbar
        Logo={ImagemLogo}
      />
      <Outlet />
    </div>
  );
};

export default Dashboard;
