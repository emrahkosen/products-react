import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { languageSliceActions } from "../../store/language-slice";
import classes from "./Switch.module.css";

const Switch = (props) => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language.lang);
  const language = useSelector((state) => {
    const selectedLang = state.language.lang;
    return state.language[selectedLang].language;
  });
  const changeLanguageTR = () => {
    dispatch(languageSliceActions.setLanguage({ type: "tr" }));
  };
  const changeLanguageENG = () => {
    dispatch(languageSliceActions.setLanguage({ type: "eng" }));
  };
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.title}>
          <h4>{`${language}:`}</h4>
        </div>
        <div
          className={`${classes.choice} ${
            lang === "tr" ? classes.selected : classes.nonselected
          }`}
          onClick={changeLanguageTR}
        >
          <h4>TR</h4>
        </div>
        <div
          className={`${classes.choice} ${
            lang === "eng" ? classes.selected : classes.nonselected
          }`}
          onClick={changeLanguageENG}
        >
          <h4>ENG</h4>
        </div>
      </div>
    </Fragment>
  );
};

export default Switch;
