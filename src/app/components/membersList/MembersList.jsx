import PropTypes from "prop-types";
import React from "react";
import MemberCard from "../memberCard/MemberCard";

const MembersList = ({ members }) => {
  console.log("render");
  return (
    <div className="d-flex">
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
};

MembersList.propTypes = {
  members: PropTypes.array.isRequired
};

export default MembersList;
