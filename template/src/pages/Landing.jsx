import React from "react";
import FlexCenter from "../components/layout/FlexCenter";
import { Redirect } from "react-router";
import { Button } from "@material-ui/core";

const Landing = () => {
  const user = {};

  if (user) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <FlexCenter height={"100vh"} column>
      <h1>Welcome to the app </h1>
      <Button>Login</Button>
    </FlexCenter>
  );
};

export default Landing;
