import { createSlice } from "@reduxjs/toolkit";
import {
  deleted_messages,
  draft_messages,
  inbox_messages,
  send_messages
} from "../data/messages";

const initialState = {
  inbox_messages: [],
  send_messages: [],
  draft_messages: [],
  deleted_messages: []
};
const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    fetchMessages(state) {
      state.inbox_messages = [...inbox_messages];
      state.send_messages = [...send_messages];
      state.draft_messages = [...draft_messages];
      state.deleted_messages = [...deleted_messages];
    },
    setMessageUnread(state, action) {
      switch (action.type) {
        case "inbox":
          state.inbox_messages.forEach((message) => {
            //const newmsg = {...message, isOpen: false};
            //TODO
          });
          break;
        case "send":
          break;
        case "draft":
          break;
        case "deleted":
          break;
        default:
          break;
      }
    }
  }
});

export default messageSlice;
export const messageSliceActions = messageSlice.actions;
