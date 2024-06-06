
import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./layout/Sidebar";


// URL de um ícone pequeno de exemplo
const imageSrc = "https://img.icons8.com/ios-filled/50/000000/react-native.png";
const Container = styled.div`
  color: ${({theme}) => theme.colors.text};
`
const H1 = styled.h1`
  color: ${({theme}) => theme.colors.error};
`

function App() {


  return (
    <Container>
      <Sidebar />
    </Container>
  );
}

export default App;
