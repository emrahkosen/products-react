import React, { useState } from "react";
import classes from "./Navbar.module.css";
import {
  AiOutlineMenu,
  AiOutlineSetting,
  AiFillAppstore
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Settings from "../Settings/Setting";
const Navbar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [setting, setSetting] = useState(false);
  const language = useSelector((state) => state.language);

  const toggleHandler = () => {
    setToggle((state) => !state);
  };

  const handleSettingOpen = () => {
    setSetting(true);
    setToggle(false);
  };

  const handleSettingClose = () => {
    setSetting(false);
  };

  return (
    <div className={classes.navbar}>
      <div
        className={classes.logo}
        onClick={() => {
          navigate("/");
        }}
      >
        <AiFillAppstore size={35} />
        <h4>{language[language.lang].message}</h4>
      </div>

      <ul className={`${toggle && classes.active} ${classes.navlinks}`}>
        <li className={classes.link}>
          <a href="/new">{language[language.lang].new}</a>
        </li>
        <li className={classes.link}>
          <a href="/new">{language[language.lang].import}</a>
        </li>
        <li className={classes.link}>
          <a href="/new">{language[language.lang].templates}</a>
        </li>
        <li className={classes.link}>
          {" "}
          <AiOutlineSetting
            className={classes.setting}
            size={25}
            onClick={handleSettingOpen}
          />{" "}
        </li>
      </ul>

      <div className={classes.toggle}>
        <AiOutlineMenu size={40} onClick={toggleHandler} />
      </div>

      {setting && (
        <Settings onClose={handleSettingClose}>
          <h1>Settings</h1>
        </Settings>
      )}
    </div>
  );
};

export default Navbar;
