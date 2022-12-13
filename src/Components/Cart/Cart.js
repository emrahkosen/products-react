import React, { useState } from "react";
import classes from "./Cart.module.css";
import { MdMarkChatUnread, MdMarkEmailRead } from "react-icons/md";
import { useSelector } from "react-redux";
const Cart = (props) => {
  const { subject, type, class_, date_ } = props;

  const [cliclked, setClicked] = useState(false);

  const language = useSelector((state) => state.language);

  const handleRead = () => {
    setClicked(true);
  };

  const handleUnread = (e) => {
    e.stopPropagation();
    setClicked(false);
    console.log(cliclked);
  };

  return (
    <div
      className={`${cliclked && classes.cartclicked} ${
        !cliclked && classes.cartnotclicked
      } ${classes.cart}`}
      onDoubleClick={handleRead}
    >
      <div className={classes.head}>
        {cliclked ? (
          <MdMarkEmailRead onDoubleClick={handleUnread} size={25} />
        ) : (
          <MdMarkChatUnread size={25} />
        )}
      </div>

      <div className={classes.body}>
        <div>
          {language[language.lang].subject}: {subject}
        </div>

        <div>
          {language[language.lang].type}: {type}
        </div>
        <div>
          {language[language.lang].class}: {class_}
        </div>
        <div>
          {language[language.lang].date}: {date_}
        </div>
        <div className={classes.button}></div>
      </div>
    </div>
  );
};

export default Cart;
