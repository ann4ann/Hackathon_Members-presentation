import React from "react";
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Container from "./components/Container";
import NavBar from "./components/UI/Navbar/NavBar";
import "./App.css";

import Particles from "react-particles-js";
import particlesConfig from "./assets/particlesConfig.json";

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
=======

function App() {
  return <div>Приложение</div>;
>>>>>>> cab979fee23af73ffaec27be9fee33cdecccc72a
}

export default App;
