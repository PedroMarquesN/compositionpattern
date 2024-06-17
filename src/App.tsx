import React, { useState } from "react";
import ContentContainer from "./layout/Home";
import ImagemLogo from "./assets/logo.png"
import Navbar from "./layout/Topside";
import NewSidebar from "./layout/Sidebar/NewSidebar";
import { NewNotification } from "./components/NewNotification";


 
function App() {

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleSidebarClick = () => {
    setSidebarOpen(!sidebarOpen);
  };
  


  return (
    <>
    <Navbar Logo={ImagemLogo} 
    children={<div />} 
    profileIconSrc="default_icon_src.png" 
    dropdownContent=
    {<div />} />
    <NewSidebar open={sidebarOpen} onToggle={handleSidebarClick} />
    <ContentContainer open={sidebarOpen} />
  </>
  );
}

export default App;
