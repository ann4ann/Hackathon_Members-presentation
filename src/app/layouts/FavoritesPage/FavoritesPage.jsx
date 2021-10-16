import PropTypes from "prop-types";
import React, { useState } from "react";
import MembersList from "../../components/membersList/MembersList";
import Breadcramps from "../../components/UI/Breadcramps/breadcramps";
// import members from "../data/members";

const FavoritesPage = () => {
  const initialState = Object.keys(localStorage).map((key) =>
    JSON.parse(localStorage.getItem(key))
  );
  const [favoriteMembers] = useState(initialState);

  // const newState = Object.keys(localStorage).map((key) =>
  //   JSON.parse(localStorage.getItem(key))
  // );
  // const filtered = members.filter((member) =>
  //   newState.some((el) => el.id === member.id)
  // );

  return (
    <>
      <Breadcramps />
      <MembersList members={favoriteMembers} />
    </>
  );
};

FavoritesPage.propTypes = {
  members: PropTypes.array
};

export default FavoritesPage;
