import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tablecart: localStorage.getItem("tablecart")
    ? localStorage.getItem("tablecart")
    : "cart"
};

const tablecartSlice = createSlice({
  name: "tablecart",
  initialState,
  reducers: {
    toggle(state) {
      if (state.tablecart === "cart") {
        state.tablecart = "table";
        localStorage.setItem("tablecart", "table");
      } else {
        state.tablecart = "cart";
        localStorage.setItem("tablecart", "cart");
      }
    },
    showTable(state) {
      state.tablecart = "table";
      localStorage.setItem("tablecart", "table");
    },
    showCart(state) {
      state.tablecart = "cart";
      localStorage.setItem("tablecart", "cart");
    }
  }
});

export default tablecartSlice;
export const tablecartSliceActions = tablecartSlice.actions;
