import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./layout/Sidebar";
import Navbar from "./layout/Topside";
import ContentContainer from "./layout/Home";
import Sisdebar from "./layout/Sidebar/Sisdebar";




 
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarClick = () => {
    setSidebarOpen(!sidebarOpen);
  };


  return (
    <>
    <Navbar />
    <Sisdebar.Menu open={sidebarOpen} />
    <Sisdebar.Icon open={sidebarOpen} onClick={handleSidebarClick} />
    <ContentContainer open={sidebarOpen} />
  </>

  );
}

export default App;
