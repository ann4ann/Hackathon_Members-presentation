import React from "react";
import MemberCard from "./memberCard";
import PropTypes from "prop-types";

const AllMembers = ({ members }) => {
  return (
    <div className="d-flex">
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
};

AllMembers.propTypes = {
  members: PropTypes.array.isRequired
};

export default AllMembers;
