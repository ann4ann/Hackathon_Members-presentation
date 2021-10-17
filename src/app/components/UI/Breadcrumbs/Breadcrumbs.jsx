import React from "react";
import { Link, useHistory } from "react-router-dom";

const Breadcrumbs = () => {
  const history = useHistory();

  const { pathname } = history.location;
  const pathNames = pathname.split("/");

  const renderLi = (path) => {
    const indexOfPath = pathNames.indexOf(path);
    if (indexOfPath + 1 === pathNames.length) {
      return (
        <li className="breadcrumb-item active" aria-current="page" key={path}>
          {path}
        </li>
      );
    }
    return (
      <li className="breadcrumb-item" key={path}>
        <Link to={`/${path}`}>{path}</Link>
      </li>
    );
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {pathNames.slice(1).map((path) => renderLi(path))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
