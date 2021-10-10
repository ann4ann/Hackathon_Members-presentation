import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import MembersList from "./membersList";
import MemberItemPage from "../../layouts/memberItemPage";

const AllMembers = ({ members }) => {
  const params = useParams();
  const { memberId } = params;

  return (
    <>
      {memberId ? (
        <MemberItemPage id={memberId} members={members} />
      ) : (
        <MembersList members={members} />
      )}
    </>
  );
};

AllMembers.propTypes = {
  members: PropTypes.array.isRequired
};

export default AllMembers;
