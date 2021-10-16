import PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";
import MembersList from "../../components/membersList/MembersList";
import Breadcramps from "../../components/UI/Breadcramps/Breadcramps";
import { MembersContext } from "../../context";

const FavoritesPage = () => {
  const { members } = useContext(MembersContext);
  useEffect(() => {
    console.log("hello");
  }, [members]);

  return (
    <>
      <Breadcramps />
      <MembersList members={members.filter((member) => member.isFavorite)} />
    </>
  );
};

FavoritesPage.propTypes = {
  members: PropTypes.array
};

export default FavoritesPage;
