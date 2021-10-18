import PropTypes from "prop-types";
import React from "react";
import MemberCard from "../memberCard/memberCard";
import cl from "./MembersList.module.css";

const MembersList = ({ members, onFavorite }) => {
  return (
    <div className={cl.memberWrapper} data-aos="zoom-in">
      {members.map((member) => (
        <MemberCard key={member.id} member={member} onFavorite={onFavorite} />
      ))}
    </div>
  );
};

MembersList.propTypes = {
  members: PropTypes.array.isRequired,
  onFavorite: PropTypes.func
};

export default MembersList;
