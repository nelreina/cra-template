import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const PrivateRoute = ({ element: Component, path, ...props }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/back-office" />;
  }

  return <Route path={path} element={<Component />} {...props} />;
};

export default PrivateRoute;
