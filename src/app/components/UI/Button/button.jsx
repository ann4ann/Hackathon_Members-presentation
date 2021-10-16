import React from "react";
import PropTypes from "prop-types";
const Button = ({ color, onClick, children }) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color + " m-1"}
      onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.object
};
export default Button;
