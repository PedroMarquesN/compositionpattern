
import React from "react";
import styled from "styled-components";
import Sidebar from "./layout/Sidebar";
import Navbar from "./layout/Topside";
import Home from "./layout/Home";
import ContentContainer from "./layout/Home";




 
function App() {


  return (
    <>
      <Navbar  /> 
      <Sidebar />
      <ContentContainer />
    </>

  );
}

export default App;
