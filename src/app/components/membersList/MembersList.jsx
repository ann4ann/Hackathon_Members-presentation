import PropTypes from "prop-types";
import React from "react";
import MemberCard from "../memberCard/MemberCard";
import cl from "./MembersList.module.css";

const MembersList = ({ members }) => {
  console.log("render");
  return (
    <div className={cl.memberWrapper}>
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
