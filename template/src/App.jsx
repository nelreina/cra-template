import React, { Suspense } from "react";
import { hot } from "react-hot-loader";
import { ReactQueryDevtools } from "react-query/devtools";

import "./App.css";
import Landing from "./pages/Landing";
import Loading from "./components/Loading";
import AppProvider from "./services/AppProvider";
import AuthProvider from "./services/AuthProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./services/PrivateRoute";
import NotFound from "./pages/NotFound";
import Authenticated from "./pages/Authenticated/Page";
import MasterData from "./pages/MasterData";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <AppProvider>
            <BrowserRouter>
              <Routes basename="/back-office">
                <Route path="/" element={<Landing />} />
                <Route path="/landing" element={<Landing />} />
                <PrivateRoute path="/authenticated" element={Authenticated} />
                <PrivateRoute path="/settings/:resource" element={MasterData} />
                <PrivateRoute path="*" element={NotFound} />
              </Routes>
            </BrowserRouter>
          </AppProvider>
        </AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </Suspense>
  );
};

export default hot(module)(App);
