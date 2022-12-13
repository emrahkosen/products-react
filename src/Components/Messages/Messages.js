import React from "react";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import FloatingAction from "../FloatingAction/FloatingAction";
import Table from "../Table/Table";
import classes from "./Messages.module.css";

const Messages = ({ messages }) => {
  const tablecart = useSelector((state) => state.tablecart.tablecart);

  return (
    <div className={classes.inbox}>
      {tablecart === "cart" &&
        messages.map((message) => (
          <Cart
            key={message.id}
            subject={message.subject}
            type={message.type}
            class_={message.class}
            date_={message.date}
          />
        ))}
      {tablecart === "table" && <Table messages={messages} />}

      <FloatingAction />
    </div>
  );
};

export default Messages;
