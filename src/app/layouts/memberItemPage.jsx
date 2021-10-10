import React from "react";
import { ageEnding } from "../utils/ageEnding";
import PropTypes from "prop-types";
import "bootstrap-icons/font/bootstrap-icons.css";

const MemberItemPage = ({ id, members }) => {
  const currentMemberInfo = members.find((member) => member.id === id);

  return (
    <>
      <h1>{currentMemberInfo.name}</h1>
      <p>
        {currentMemberInfo.age} {ageEnding(currentMemberInfo.age)}
      </p>
      <p>{currentMemberInfo.about}</p>
      <div>
        <img
          src={currentMemberInfo.photoUrl}
          className="rounded mx-auto"
          alt="photo"
          style={{ width: 14 + "rem" }}
        />
      </div>
      <div>
        <p>
          <i className="bi bi-telegram">
            <a href={currentMemberInfo.socialNetworks.telegram}>Телеграм</a>{" "}
          </i>
        </p>
        <p>
          <i className="bi bi-instagram">
            <a href={currentMemberInfo.socialNetworks.telegram}>Инстаграм</a>{" "}
          </i>
        </p>
      </div>
    </>
  );
};

MemberItemPage.propTypes = {
  id: PropTypes.string,
  members: PropTypes.array.isRequired
};

export default MemberItemPage;
