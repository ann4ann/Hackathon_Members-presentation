import React, { useContext } from "react";
import { useParams } from "react-router";
import MembersList from "../../components/membersList/MembersList";
import Breadcrumbs from "../../components/UI/Breadcrumbs/Breadcrumbs";
import MemberItemPage from "../MemberPage/MemberItemPage";
import { MembersContext } from "../../context";

const TeamPage = () => {
  const params = useParams();
  const { memberId } = params;

  const { members, setMembers } = useContext(MembersContext);

  const handleToggleFavorite = (memberId) => {
    setMembers(
      members.filter((member) => {
        if (member.id === memberId) {
          member.isFavorite = !member.isFavorite;
        }
        return member;
      })
    );

    localStorage.getItem(memberId) === null
      ? localStorage.setItem(memberId, JSON.stringify(memberId))
      : localStorage.removeItem(memberId);
  };

  return (
    <>
      <Breadcrumbs />
      {memberId ? (
        <MemberItemPage id={memberId} members={members} />
      ) : (
        <MembersList members={members} onFavorite={handleToggleFavorite} />
      )}
    </>
  );
};

export default TeamPage;
