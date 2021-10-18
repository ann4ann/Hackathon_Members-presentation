import React, { useContext } from "react";
import { useParams } from "react-router";
import MembersList from "../../components/membersList/MembersList";
import Breadcrumbs from "../../components/UI/Breadcrumbs/Breadcrumbs";
import MemberItemPage from "../MemberPage/memberItemPage";
import { MembersContext } from "../../context";
import cl from "./TeamPage.module.css";

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
      <h1 className={cl.title}>Наша команда</h1>
      {memberId ? (
        <MemberItemPage id={memberId} members={members} />
      ) : (
        <MembersList members={members} onFavorite={handleToggleFavorite} />
      )}
    </>
  );
};

export default TeamPage;
