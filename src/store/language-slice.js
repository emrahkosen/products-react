import { createSlice } from "@reduxjs/toolkit";

import tr from "../data/tr.json";
import eng from "../data/eng.json";

const initialState = { lang: "tr", tr: {}, eng: {} };

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    initState(state) {
      if (localStorage.getItem("lang") === "eng") {
        state.lang = "eng";
      } else {
        state.lang = "tr";
        localStorage.setItem("lang", "tr");
      }
      state.eng = eng;
      state.tr = tr;
    },
    setLanguage(state, action) {
      switch (action.payload.type) {
        case "tr": {
          localStorage.setItem("lang", "tr");
          state.lang = "tr";
          break;
        }
        case "eng": {
          localStorage.setItem("lang", "eng");
          state.lang = "eng";
          break;
        }
        default: {
          localStorage.setItem("lang", "tr");
          state.lang = "tr";
        }
      }
    }
  }
});

export default languageSlice;
export const languageSliceActions = languageSlice.actions;
