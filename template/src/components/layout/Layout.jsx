import React from "react";
import { Container } from "@material-ui/core";
import MenuAppBar from "./MenuAppBar";

const Layout = ({ children }) => {
  return (
    <>
      <MenuAppBar />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
