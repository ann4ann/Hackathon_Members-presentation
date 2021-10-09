import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Container from "./components/Container";
import NavBar from "./components/UI/Navbar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <NavBar />
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
}

export default App;
