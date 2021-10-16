import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { publicRoutes } from "../router";

const AppRouter = () => {
  return (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
      <Redirect to="/"></Redirect>
    </Switch>
  );
};

export default AppRouter;
