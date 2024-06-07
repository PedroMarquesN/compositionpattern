import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./layout/Sidebar";
import ContentContainer from "./layout/Home";
import Sisdebar from "./layout/Sidebar/Sisdebar";
import ImagemLogo from "./assets/logo.png"
import Navbar from "./layout/Topside";



 
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarClick = () => {
    setSidebarOpen(!sidebarOpen);
  };


  return (
    <>
    <Navbar Logo={ImagemLogo} 
    children=
    {<div />} 
    profileIconSrc="default_icon_src.png" 
    dropdownContent=
    {<div />} />
    <Sisdebar open={sidebarOpen} onToggle={handleSidebarClick} />
    <ContentContainer open={sidebarOpen} />
  </>

  );
}

export default App;
