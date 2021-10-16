import "bootstrap-icons/font/bootstrap-icons.css";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Badge from "../../components/UI/Badge/Badge";
import ButtonComponent from "../../components/UI/Button/Button";
import Progress from "../../components/UI/ProgressBar/ProgressBar";
import { ageEnding } from "../../utils/ageEnding";

const MemberItemPage = ({ id, members }) => {
  const currentMemberInfo = members.find((member) => member.id === id);

  return (
    <div className="m-5">
      <h1>{currentMemberInfo.name}</h1>
      <p>
        {currentMemberInfo.age} {ageEnding(currentMemberInfo.age)}
      </p>
      <p>{currentMemberInfo.about}</p>
      <div className="d-flex justify-content-between pt-3">
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
                Telegram
              </a>
            </i>
          </p>
          <p>
            <i className="bi bi-people-fill">
              <a
                href={
                  currentMemberInfo.socialNetworks.vk
                    ? currentMemberInfo.socialNetworks.vk
                    : currentMemberInfo.socialNetworks.fb
                }
                className="link-light">
                ВКонтакте/Facebook
              </a>
            </i>
          </p>
          <p>
            <i className="bi bi-instagram">
              <a
                href={currentMemberInfo.socialNetworks.inst}
                className="link-light">
                Instagram
              </a>
            </i>
          </p>
          <div className="p-4">
            {currentMemberInfo.isTeamLeader && (
              <Badge color="danger" content="TeamLead" />
            )}
            В разработке этого проекта выполнил(а):
          </div>
          {currentMemberInfo.contribution.split(", ").map((item) => (
            <Badge key={item} color="success" content={item} />
          ))}
        </div>
        <div className="d-flex align-items-center m-3">
          <div className="fs-4">Скиллы:</div>
          <div className="mx-4">
            {Object.entries(currentMemberInfo.skills).map((skill) => (
              <div key={skill[0]} className="m-3">
                <Progress
                  percent={skill[1]}
                  name={skill[0]}
                  color="#011f4b"
                  type={skill[0] === "react" ? "circle" : ""}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <ButtonComponent color="outline-info" name="Добавить в избранное" />
        <Link to="/members" className="btn btn-outline-info ms-3">
          Вернуться назад
        </Link>
      </div>
    </div>
  );
};

MemberItemPage.propTypes = {
  id: PropTypes.string,
  members: PropTypes.array.isRequired
};

export default MemberItemPage;
