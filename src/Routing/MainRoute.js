import React, { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import New from "../Pages/NewPage";

const MainRoute = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/home/*" element={<HomePage />} />
        <Route path="/new" element={<New />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Fragment>
  );
};

export default MainRoute;
