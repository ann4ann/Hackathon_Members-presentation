import React from "react";
import { ageEnding } from "../utils/ageEnding";
import PropTypes from "prop-types";
import "bootstrap-icons/font/bootstrap-icons.css";
import ButtonComponent from "../components/UI/button";
// import Progress from "../components/UI/progress";

const MemberItemPage = ({ id, members }) => {
  const currentMemberInfo = members.find((member) => member.id === id);
  const addToFavorites = () => {
    console.log("added to favorites");
  };

  return (
    <div className="m-5">
      <h1>{currentMemberInfo.name}</h1>
      <p>
        {currentMemberInfo.age} {ageEnding(currentMemberInfo.age)}
      </p>
      <p>{currentMemberInfo.about}</p>
      <div className="d-flex pt-3">
        <div>
          <img
            src={currentMemberInfo.photoUrl}
            className="rounded"
            alt="photo"
            style={{ width: 14 + "rem" }}
          />
        </div>
        <div className="m-3" style={{ width: 20 + "rem" }}>
          <p>
            <i className="bi bi-telegram">
              <a
                href={currentMemberInfo.socialNetworks.telegram}
                className="link-light">
                Телеграм
              </a>{" "}
            </i>
          </p>
          <p>
            <i className="bi bi-people-fill">
              <a
                href={currentMemberInfo.socialNetworks.vk}
                className="link-light">
                ВКонтакте
              </a>{" "}
            </i>
          </p>
          <p>
            <i className="bi bi-instagram">
              <a
                href={currentMemberInfo.socialNetworks.inst}
                className="link-light">
                Инстаграм
              </a>{" "}
            </i>
          </p>
          <div className="pt-4">
            В разработке этого проекта делал: {currentMemberInfo.contribution}
          </div>
        </div>
        <div className="m-3">
          Скиллы:
          {/* <div><Progress /></div> */}
        </div>
      </div>
      <ButtonComponent
        color="outline-info"
        functBtn={addToFavorites}
        name="Добавить в избранное"
      />
    </div>
  );
};

MemberItemPage.propTypes = {
  id: PropTypes.string,
  members: PropTypes.array.isRequired
};

export default MemberItemPage;