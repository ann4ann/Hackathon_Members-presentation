import React from "react";
import { useParams } from "react-router";
import Breadcramps from "../../components/UI/Breadcramps/breadcramps";
import MemberItemPage from "../MemberPage/memberItemPage";
import MembersList from "../../components/membersList/MembersList";
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
