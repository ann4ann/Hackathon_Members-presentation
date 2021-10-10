import React from "react";
import PropTypes from "prop-types";
const ButtonComponent = ({ color, functBtn, name }) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={functBtn}>
      {name}
    </button>
  );
};

ButtonComponent.propTypes = {
  color: PropTypes.string,
  functBtn: PropTypes.func,
  name: PropTypes.string
};
export default ButtonComponent;
