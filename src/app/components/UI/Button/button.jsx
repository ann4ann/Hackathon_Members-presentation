import React from "react";
import PropTypes from "prop-types";
const Button = ({ onClick, children, classes, ...rest }) => {
  console.log(rest);
  const defaultClasses = `btn btn-primary m-1`;
  return (
    <button
      type="button"
      className={classes || defaultClasses}
      onClick={onClick}
      {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
  classes: PropTypes.string,
  rest: PropTypes.string
};
export default Button;
