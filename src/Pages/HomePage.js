import React, { Fragment } from "react";
import Home from "../Components/Home/Home";
import HomeRoute from "../Routing/HomeRoute";
const HomePage = () => {
  return (
    <Fragment>
      <Home>
        <HomeRoute />
      </Home>
    </Fragment>
  );
};

export default HomePage;
