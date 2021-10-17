import React from "react";
import Particles from "react-particles-js";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import particlesConfig from "./assets/particlesConfig.json";
import AppRouter from "./components/AppRouter";
import Container from "./components/Container";
import NavBar from "./components/UI/Navbar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Particles
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "-1"
        }}
        params={particlesConfig}
      />
      <Container>
        <NavBar />
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
}

export default App;
