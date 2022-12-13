import React from "react";
import { useSelector } from "react-redux";
import Modal from "../Ui/Modal";
import classes from "./Setting.module.css";
import Switch from "./Switch";

const Settings = (props) => {
  const language = useSelector((state) => state.language);
  const close = language[language.lang].close;

  return (
    <Modal onClose={props.onClose} style={{ top: "7vh", right: "2%" }}>
      <div className={classes.main}>
        <Switch label="Switch One" large />
      </div>

      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>
          {close}
        </button>
      </div>
    </Modal>
  );
};

export default Settings;
