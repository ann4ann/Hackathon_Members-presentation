import React from "react";
import { Link } from "react-router-dom";
import cl from "./NavBar.module.css";
import logo from "../../../assets/svg/react-logo.svg";

const NavBar = () => {
  return (
    <nav className={cl.navbar}>
      <div className={cl.logo}>
        <img src={logo} alt="logo" />
        <div className={cl.logoTitle}>React Hackathon</div>
      </div>
      <ul className={cl.navbarWrapper}>
        <Link className={cl.navbarLink} to="/">
          Главная
        </Link>
        <Link className={cl.navbarLink} to="/members">
          Команда
        </Link>
        <Link className={cl.navbarLink} to="/favorites">
          Избранное
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
