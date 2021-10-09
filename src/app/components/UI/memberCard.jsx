import React from "react";
import PropTypes from "prop-types";
import { ageEnding } from "../../utils/ageEnding";

const MemberCard = ({ member }) => {
  return (
    <div
      className="card d-flex justify-content-between m-1"
      style={{ width: 16 + "rem" }}>
      <div>
        <img
          src={member.photoUrl}
          className="card-img-top"
          alt="photo"
          style={{ width: 16 + "rem", height: 22 + "rem", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{member.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {member.age} {ageEnding(member.age)}
          </h6>
          <p className="card-text">{member.about}</p>
        </div>
      </div>
      <div>
        <a href="#" className="btn btn-primary m-1">
          Open
        </a>
        <a href="#" className="btn btn-primary m-1">
          Favorites
        </a>
      </div>
    </div>
  );
};

MemberCard.propTypes = {
  member: PropTypes.object.isRequired
};

export default MemberCard;
