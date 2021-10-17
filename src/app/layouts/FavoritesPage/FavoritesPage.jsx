import React, { useState, useEffect, useContext } from "react";
import MembersList from "../../components/membersList/MembersList";
import Breadcrumbs from "../../components/UI/Breadcrumbs/Breadcrumbs";
import { MembersContext } from "../../context";
import cl from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const { members, setMembers } = useContext(MembersContext);
  const [favoritesMembers, setFavoritesMembers] = useState([]);

  useEffect(() => {
    setFavoritesMembers(members.filter((member) => member.isFavorite));
  }, []);

  const handleToggleFavorite = (memberId) => {
    setMembers(
      members.filter((member) => {
        if (member.id === memberId) {
          member.isFavorite = !member.isFavorite;
          return member;
        }
        return member;
      })
    );
    setFavoritesMembers(members.filter((member) => member.isFavorite));
  };

  return (
    <>
      <Breadcrumbs />
      <h1 className={cl.title}>Избранные</h1>
      {favoritesMembers.length > 0 ? (
        <MembersList
          members={favoritesMembers}
          onFavorite={handleToggleFavorite}
        />
      ) : (
        <div className={cl.error}>Список пуст</div>
      )}
    </>
  );
};

export default FavoritesPage;
