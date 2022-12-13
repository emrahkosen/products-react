import React from "react";
import HomeSideBar from "../HomeSideBar/HomeSideBar";
import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <div className={classes.home}>
      <HomeSideBar />
      <div className={classes.main}>{props.children}</div>
    </div>
  );
};

export default Home;
