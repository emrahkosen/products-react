import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./language-slice";
import messageSlice from "./messages-slice";
import tablecartSlice from "./table-cart-slice";

const store = configureStore({
  reducer: {
    tablecart: tablecartSlice.reducer,
    language: languageSlice.reducer,
    messages: messageSlice.reducer
  }
});

export default store;
