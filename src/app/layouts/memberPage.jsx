import React from "react";
import AllMembers from "../components/UI/allMembers";
import members from "../data/members";
import Breadcramps from "../components/UI/breadcramps";

const MembersPage = () => {
  return (
    <>
      <Breadcramps />
      <AllMembers members={members} />
    </>
  );
};

export default MembersPage;
