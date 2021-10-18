import React, { useState, useEffect } from "react";
import Particles from "react-particles-js";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import particlesConfig from "./assets/particlesConfig.json";
import AppRouter from "./components/AppRouter";
import Container from "./components/Container";
import NavBar from "./components/UI/Navbar/NavBar";
import { MembersContext } from "./context";
import team from "./data/members";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [members, setMembers] = useState(team);
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom"
    });
  }, []);

  return (
    <MembersContext.Provider
      value={{
        members,
        setMembers
      }}>
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
    </MembersContext.Provider>
  );
}

export default App;
