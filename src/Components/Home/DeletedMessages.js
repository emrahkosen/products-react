import React from "react";
import { useSelector } from "react-redux";
import Messages from "../Messages/Messages";

const DeletedMessages = () => {
  const deleted_messages = useSelector(
    (state) => state.messages.deleted_messages
  );
  return <Messages messages={deleted_messages} />;
};

export default DeletedMessages;
