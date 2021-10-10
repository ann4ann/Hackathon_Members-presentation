import React from "react";
import { Link, useHistory } from "react-router-dom";

const Breadcramps = () => {
  const history = useHistory();
  console.log("history", history);

  const { pathname } = history.location;
  console.log("pathname", pathname);
  const pathNames = pathname.split("/");
  console.log("pathNames", pathNames);

  const renderLi = (path) => {
    console.log("path", path);

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

export default Breadcramps;
