import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PageRoute from "./page-route";

const PageRouter = ({
  children,
  config = [],
  isUserSignedIn = false,
  defaultPath = "/",
}) => {
  return (
    <Router>
      {children}
      <Switch>
        {config &&
          config.map(({ redirectPath, ...routeConfig }) => {
            return (
              <PageRoute
                defaultPath={redirectPath || defaultPath}
                isUserSignedIn={isUserSignedIn}
                key={routeConfig.path}
                {...routeConfig}
              />
            );
          })}
      </Switch>
    </Router>
  );
};

export default PageRouter;
