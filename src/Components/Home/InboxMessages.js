import React from "react";
import { useSelector } from "react-redux";
import Messages from "../Messages/Messages";

const InboxMessages = () => {
  const inbox_messages = useSelector((state) => state.messages.inbox_messages);
  return <Messages messages={inbox_messages} />;
};

export default InboxMessages;
