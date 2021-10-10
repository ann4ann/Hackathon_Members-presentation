import React from "react";
import MemberCard from "./memberCard";
import PropTypes from "prop-types";

const MembersList = ({ members }) => {
  const handleAddFavorite = (member) => {
    localStorage.getItem(`id${member.id}`)
      ? localStorage.removeItem(`id${member.id}`)
      : localStorage.setItem(`id${member.id}`, JSON.stringify(member));
  };

  return (
    <div className="d-flex">
      {members.map((member) => (
        <MemberCard
          key={member.id}
          member={member}
          onAddFavorite={handleAddFavorite}
        />
      ))}
    </div>
  );
};

MembersList.propTypes = {
  members: PropTypes.array.isRequired
};

export default MembersList;
