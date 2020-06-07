
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "./Auth";
import { DataProvider } from "./dataContext";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <DataProvider>
            <RouteComponent {...routeProps} />
          </DataProvider>
        ) : (
            <Redirect to={"/"} />
          )
      }
    />
  );
};


export default PrivateRoute