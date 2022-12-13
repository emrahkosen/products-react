import React from "react";
import { useSelector } from "react-redux";
import Messages from "../Messages/Messages";

const DraftMessages = () => {
  const draft_messages = useSelector((state) => state.messages.draft_messages);
  return <Messages messages={draft_messages} />;
};

export default DraftMessages;
