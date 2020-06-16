import React, { Suspense } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ReactQueryDevtools } from "react-query-devtools";

import "./App.css";
import Landing from "./pages/Landing";
import Loading from "./components/Loading";
import Dashboard from "./pages/Dashboard";
import FormikPage from "./pages/Formik";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Router>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/formik" component={FormikPage} />
        <Route exact path="/" component={Landing} />
      </Router>
    </Suspense>
  );
};

export default hot(module)(App);
