import React from "react";
import FlexCenter from "../components/layout/FlexCenter";
import { useUser } from "reactfire";
import { Redirect } from "react-router";
import { Button } from "material-ui/Button";

const Landing = () => {
  const user = useUser();

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
