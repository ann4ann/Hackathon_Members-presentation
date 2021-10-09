import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Container from "./components/Container";
import NavBar from "./components/UI/Navbar/NavBar";

import Particles from "react-particles-js";
import particlesConfig from "./assets/particlesConfig.json";

function App() {
  return (
    <BrowserRouter>
      <Particles
        style={{
          position: "absolute",
          top: "0",
          left: "0"
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
