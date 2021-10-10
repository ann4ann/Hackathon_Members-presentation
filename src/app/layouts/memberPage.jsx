import React from "react";
import AllMembers from "../components/UI/allMembers";
import members from "../data/members";

const MembersPage = () => {
  return <AllMembers members={members} />;
};

export default MembersPage;
