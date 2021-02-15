import React from "react";
import { Typography } from "@material-ui/core";
import FlexCenter from "../components/layout/FlexCenter";
import Layout from "../components/layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <FlexCenter column>
        <Typography variant="h2">404 | Page not found</Typography>
      </FlexCenter>
    </Layout>
  );
};

export default NotFound;
