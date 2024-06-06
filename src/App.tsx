import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./layout/Sidebar";
import Navbar from "./layout/Topside";
import ContentContainer from "./layout/Home";




 
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarClick = () => {
    setSidebarOpen(!sidebarOpen);
  };


  return (
    <>
      <Navbar  /> 
      <Sidebar open={sidebarOpen} onToggle={handleSidebarClick} />
      <ContentContainer open={sidebarOpen} />
    </>

  );
}

export default App;
