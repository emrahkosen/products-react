import React, { useState } from "react";
import classes from "./HomeSideBar.module.css";
import {
  AiOutlineInbox,
  AiOutlineImport,
  AiOutlineHistory,
  AiOutlineDelete
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HomeSideBar = () => {
  const [mouseEnter, setMouseEnter] = useState(false);
  let navigate = useNavigate();

  const language = useSelector((state) => state.language);

  const handleOnMouseEnter = () => {
    setMouseEnter(true);
    console.log(mouseEnter);
  };
  const handleOnMouseOut = () => {
    setMouseEnter(false);
  };
  return (
    <div
      className={classes.homesidebar}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseOut}
    >
      <div
        className={classes.messagebox}
        onClick={() => {
          navigate("/home/inbox");
        }}
      >
        <AiOutlineInbox size={25} />{" "}
        {mouseEnter && <h4>{language[language.lang].inbox}</h4>}
      </div>
      <div
        className={classes.messagebox}
        onClick={() => {
          navigate("/home/sent");
        }}
      >
        <AiOutlineImport size={25} />{" "}
        {mouseEnter && <h4>{language[language.lang].sent}</h4>}
      </div>
      <div
        className={classes.messagebox}
        onClick={() => {
          navigate("/home/draft");
        }}
      >
        <AiOutlineHistory size={25} />{" "}
        {mouseEnter && <h4>{language[language.lang].draft}</h4>}
      </div>

      <div
        className={classes.messagebox}
        onClick={() => {
          navigate("/home/deleted");
        }}
      >
        <AiOutlineDelete size={25} />{" "}
        {mouseEnter && <h4>{language[language.lang].delete}</h4>}
      </div>
    </div>
  );
};

export default HomeSideBar;
