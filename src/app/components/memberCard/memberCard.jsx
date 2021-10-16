import React, { useState } from "react";
import PropTypes from "prop-types";
import { ageEnding } from "../../utils/ageEnding";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";
import cl from "./memberCard.module.css";

const MemberCard = ({ member }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = (member) => {
    member.isFavorite = !member.isFavorite;
    setIsFavorite(!isFavorite);
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
        <Link to={`members/${member.id}`}>
          <Button color="primary">Открыть</Button>
        </Link>

        <Button
          classes={
            member.isFavorite
              ? `${cl.favoriteBtn} ${cl.active}`
              : `${cl.favoriteBtn}`
          }
          title="Добавить в избранное"
          onClick={() => handleToggleFavorite(member)}></Button>
      </div>
    </div>
  );
};

MemberCard.propTypes = {
  member: PropTypes.object.isRequired
};

export default MemberCard;
