import React from "react";
import MemberCard from "./memberCard";
import PropTypes from "prop-types";

const MembersList = ({ members }) => {
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
