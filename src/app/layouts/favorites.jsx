<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MembersList from "../components/UI/membersList";

const FavoritesPage = () => {
  const initialState = Object.keys(localStorage).map((key) =>
    JSON.parse(localStorage.getItem(key))
  );
  const [favoriteMembers, setFavoriteMembers] = useState(initialState);

  useEffect(() => {
    const newState = Object.keys(localStorage).map((key) =>
      JSON.parse(localStorage.getItem(key))
    );
    console.log(newState);
    return setFavoriteMembers(newState);
  }, [favoriteMembers]);

  return <MembersList members={favoriteMembers} />;
};

FavoritesPage.propTypes = {
  members: PropTypes.array
};

export default FavoritesPage;
=======
>>>>>>> cab979fee23af73ffaec27be9fee33cdecccc72a
