import React from "react";
import PropTypes from "prop-types";
import { ageEnding } from "../../utils/ageEnding";
import { Link } from "react-router-dom";
import ButtonComponent from "./button";

const MemberCard = ({ member }) => {
  const handleToggleFavorite = (member) => {
    localStorage.getItem(member.id) === null
      ? localStorage.setItem(member.id, JSON.stringify(member))
      : localStorage.removeItem(member.id);
  };

  return (
    <div
      className="card d-flex justify-content-between m-1 bg-dark bg-gradient bg-opacity-50"
      style={{ width: 14 + "rem" }}>
      <div>
        <div className="p-2">
          <img
            src={member.photoUrl}
            className="card-img-top rounded mx-auto"
            alt="photo"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{member.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {member.age} {ageEnding(member.age)}
          </h6>
          <p className="card-text">{member.about}</p>
        </div>
      </div>
      <div>
        <Link to="#" className="btn btn-primary m-1">
          Open
        </Link>
        <ButtonComponent
          color="primary"
          name="fav"
          functBtn={() => handleToggleFavorite(member)}
        />
      </div>
    </div>
  );
};

MemberCard.propTypes = {
  member: PropTypes.object.isRequired
};

export default MemberCard;
