import React from "react";
import { Route, Routes } from "react-router-dom";
import { Paths } from "./path";
import HomePage from "../pages/HomePage";

const AppRouter = () => {
  return (
    <Routes>
      <Route>
        <Route path={Paths.home} element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
