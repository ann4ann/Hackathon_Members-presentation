import React, { useState, useEffect, useContext } from "react";
import MembersList from "../../components/membersList/MembersList";
import Breadcrumbs from "../../components/UI/Breadcrumbs/Breadcrumbs";
import { MembersContext } from "../../context";

const FavoritesPage = () => {
  const { members, setMembers } = useContext(MembersContext);
  const [favoritesMembers, setFavoritesMembers] = useState(members);

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
      <MembersList
        members={favoritesMembers}
        onFavorite={handleToggleFavorite}
      />
    </>
  );
};

export default FavoritesPage;
