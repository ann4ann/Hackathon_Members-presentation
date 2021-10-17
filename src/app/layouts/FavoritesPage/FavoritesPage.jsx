import PropTypes from "prop-types";
import React from "react";
import MembersList from "../../components/membersList/MembersList";
import Breadcramps from "../../components/UI/Breadcramps/Breadcramps";

const FavoritesPage = () => {
  return (
    <>
      <Breadcramps />
      <MembersList members={[]} />
    </>
  );
};

FavoritesPage.propTypes = {
  members: PropTypes.array
};

export default FavoritesPage;
