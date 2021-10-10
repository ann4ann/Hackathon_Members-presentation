import React from "react";
import PropTypes from "prop-types";
import MembersList from "../components/UI/membersList";

const FavoritesPage = () => {
  const membersFav = Object.keys(localStorage).map((key) =>
    JSON.parse(localStorage.getItem(key))
  );
  console.log(membersFav);

  return membersFav && <MembersList members={membersFav} />;
};

FavoritesPage.propTypes = {
  members: PropTypes.array.isRequired
};

export default FavoritesPage;
