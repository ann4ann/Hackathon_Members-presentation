import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  console.log("render Nav");
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand" href="#">
        Логотип
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link active" href="#">
            Главная
          </Link>
          <Link to="/members" className="nav-item nav-link" href="#">
            Команда
          </Link>
          <Link to="/favorites" className="nav-item nav-link" href="#">
            Избранное
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
