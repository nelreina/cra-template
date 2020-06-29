import React from "react";
import Features from "../components/Features";
import FlexCenter from "../components/layout/FlexCenter";
import Layout from "../components/layout/Layout";

const Dashboard = () => {
  return (
    <Layout title="Dashboard">
      <FlexCenter column>
        <h1>Dashboard</h1>
        <Features />
      </FlexCenter>
    </Layout>
  );
};

export default Dashboard;
