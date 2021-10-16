import PropTypes from "prop-types";
import React from "react";
const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.array
};

export default Container;
