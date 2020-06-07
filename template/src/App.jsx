import React, { Suspense } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Landing from "./pages/Landing";
import Loading from "./components/Loading";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Landing} />
      </Router>
    </Suspense>
  );
};

export default hot(module)(App);
