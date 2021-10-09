import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, ...props }) => {
  return (
    <button className="btn btn-primary" {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;

/* <button className="btn btn-primary" onClick={() => history.push("/")}>
        Back
      </button> */
