import React from "react";
import { Route, Redirect } from "react-router-dom";
import { PAGE_TYPES } from "@consts";

const getRule = (type, isUserSignedIn) => {
  if (type === PAGE_TYPES.ONLY_FOR_LOGGED_IN) {
    return isUserSignedIn;
  } else if (type === PAGE_TYPES.ONLY_FOR_UNLOGGED_IN) {
    return !isUserSignedIn;
  }
};

const PageRoute = ({
  isUserSignedIn,
  path,
  type,
  defaultPath,
  exact,
  component: Component,
}) => {
  if (type === PAGE_TYPES.FOR_ALL) {
    return <Route exact={!!exact} path={path} component={Component} />;
  } else {
    return (
      <Route
        exact={!!exact}
        path={path}
        render={(props) =>
          getRule(type, isUserSignedIn) ? (
            <Component {...props} />
          ) : (
            <Redirect to={defaultPath} />
          )
        }
      />
    );
  }
};

export default PageRoute;
