import React from "react";

const Badge = ({ color, content }) => {
  return <span className={"badge bg-" + color}>{content}</span>;
};

export default Badge;
