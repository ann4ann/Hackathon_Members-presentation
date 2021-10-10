import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MembersList from "../components/UI/membersList";

const FavoritesPage = () => {
  const [favoriteMembers, setFavoriteMembers] = useState([]);
  useEffect(() => {
    return () => {
      setFavoriteMembers(
        Object.keys(localStorage).map((key) =>
          JSON.parse(localStorage.getItem(key))
        )
      );
    };
  }, [favoriteMembers]);

  return <MembersList members={favoriteMembers} />;
};

FavoritesPage.propTypes = {
  members: PropTypes.array
};

export default FavoritesPage;
