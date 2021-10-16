import React from "react";
import { Link } from "react-router-dom";
import Breadcramps from "../../components/UI/Breadcramps/breadcramps";
import classes from "./main.module.css";

const MainPage = () => {
  return (
    <>
      <Breadcramps />
      <div>
        <h1>
          <p
            align="center"
            className="d-flex justify-content-between m-1 bg-dark bg-gradient bg-opacity-50 fs-4">
            В команду, которая разработала Реакт-приложение, где вы сейчас
            находитесь, входит 5 человек. Каждый из нас очень любит Реакт,
            JavaScript и Фронтенд в целом. Мы очень старались, когда
            разрабатывали это приложение и надеемся оно вам понравится!
          </p>
        </h1>
        <Link className={classes.main} to="/members">
          <h1>Meet our team</h1>{" "}
        </Link>
      </div>
    </>
  );
};

export default MainPage;
