import React, { useState } from "react";
import ImagemLogo from "../../assets/logobranca.png"
import { Outlet } from "react-router-dom";
import Navbar from "../../layout/Topside";

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
