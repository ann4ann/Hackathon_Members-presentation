import React from "react";
import PropTypes from "prop-types";
const Button = ({ color, functBtn, name }) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={functBtn}>
      {name}
    </button>
  );
};

Button.PropTypes = {
  color: PropTypes.string,
  functBtn: PropTypes.func,
  name: PropTypes.string
};
export default Button;
