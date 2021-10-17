import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/UI/Breadcrumbs/Breadcrumbs";
import Button from "../../components/UI/Button/Button";
import cl from "./main.module.css";

const MainPage = () => {
  return (
    <>
      <Breadcrumbs />
      <div
        className={cl.mainWrapper}
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-duration="1200">
        <p align="center" className={cl.mainText}>
          В команду, которая разработала Реакт-приложение, где вы сейчас
          находитесь, входит 5 человек. Каждый из нас очень любит Реакт,
          JavaScript и Фронтенд в целом. Мы очень старались, когда разрабатывали
          это приложение и надеемся оно вам понравится!
        </p>

        <Link to="/members">
          <Button className={cl.mainBtn}>
            <span>Познакомиться поближе &#128521; </span>
          </Button>
        </Link>
      </div>
    </>
  );
};

export default MainPage;
