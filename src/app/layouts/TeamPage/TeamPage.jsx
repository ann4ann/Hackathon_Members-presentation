import React, { useContext } from "react";
import { useParams } from "react-router";
import MembersList from "../../components/membersList/MembersList";
import Breadcramps from "../../components/UI/Breadcramps/Breadcramps";
import { MembersContext } from "../../context";
import MemberItemPage from "../MemberPage/MemberItemPage";

const TeamPage = () => {
  const params = useParams();
  const { memberId } = params;
  const { members } = useContext(MembersContext);
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
