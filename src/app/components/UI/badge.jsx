import React from "react";
import PropTypes from "prop-types";

const Badge = ({ color, content }) => {
  return <span className={"badge m-1 bg-" + color}>{content}</span>;
};

Badge.propTypes = {
  color: PropTypes.string,
  content: PropTypes.string
};

export default Badge;
