import React from "react";
import FlexCenter from "../components/layout/FlexCenter";
import { Typography } from "@material-ui/core";
import { useAuth } from "../services/AuthProvider";
import { Navigate } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";

const Landing = () => {
  const { login, role, error } = useAuth();

  const formLogin = (values) => {
    login(values);
  };

  if (role) {
    return <Navigate to={`${role}`} />;
  }
  return (
    <FlexCenter height={"100vh"} column justify="start">
      <div style={{ padding: "5em 0", color: "#1F78B4", textAlign: "center" }}>
        <Typography variant="h4" component="h4">
          LCM Back office
        </Typography>
      </div>
      <LoginForm submit={formLogin} error={error} />
    </FlexCenter>
  );
};

export default Landing;
