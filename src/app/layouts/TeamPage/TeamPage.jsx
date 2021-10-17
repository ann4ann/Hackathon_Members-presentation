import React from "react";
import { useParams } from "react-router";
import MembersList from "../../components/membersList/MembersList";
import Breadcramps from "../../components/UI/Breadcramps/Breadcramps";
import MemberItemPage from "../MemberPage/MemberItemPage";
import members from "../../data/members";

const TeamPage = () => {
  const params = useParams();
  const { memberId } = params;
  return (
    <>
      <Breadcramps />
      {memberId ? (
        <MemberItemPage id={memberId} members={members} />
      ) : (
        <MembersList members={members} />
      )}
    </>
  );
};

export default TeamPage;
