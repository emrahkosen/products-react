import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tablecartSliceActions } from "../../store/table-cart-slice";
import classes from "./FloatingAction.module.css";

const FloatingAction = () => {
  const dispatch = useDispatch();
  const tablecart = useSelector((state) => state.tablecart.tablecart);
  const language = useSelector((state) => state.language);
  const table = language[language.lang].table;
  const cart = language[language.lang].cart;
  const handleAction = () => {
    dispatch(tablecartSliceActions.toggle());
  };

  return (
    <div className={classes.floatingaction} onClick={handleAction}>
      {tablecart === "table" ? <h4>{table}</h4> : <h4>{cart}</h4>}
    </div>
  );
};

export default FloatingAction;
