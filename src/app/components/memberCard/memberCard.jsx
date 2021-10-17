import React from "react";
import PropTypes from "prop-types";
import { ageEnding } from "../../utils/ageEnding";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";
import cl from "./memberCard.module.css";
import Tilt from "react-tilt";

const MemberCard = ({ member, onFavorite }) => {
  return (
    <Tilt
      className={cl.tilt}
      options={{
        reverse: false,
        max: 25,
        perspective: 1000,
        scale: 1.02,
        speed: 1000,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)"
      }}>
      <div className={cl.card}>
        <img className={cl.cardImg} src={member.photoUrl} alt="photo" />
        <div className={cl.content}>
          <h2>{member.name}</h2>
          <h3>
            {member.age} {ageEnding(member.age)}
          </h3>
          <p>{member.about}</p>
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
            onClick={() => onFavorite(member.id)}></Button>
        </div>
      </div>
    </Tilt>
  );
};

MemberCard.propTypes = {
  member: PropTypes.object.isRequired,
  onFavorite: PropTypes.func
};

export default MemberCard;
