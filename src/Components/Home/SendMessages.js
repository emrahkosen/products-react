import React from "react";
import { useSelector } from "react-redux";
import Messages from "../Messages/Messages";

const SendMessages = () => {
  const send_messages = useSelector((state) => state.messages.send_messages);
  return <Messages messages={send_messages} />;
};

export default SendMessages;
