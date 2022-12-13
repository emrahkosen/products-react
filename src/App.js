import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import MainRoute from "./Routing/MainRoute";
import { languageSliceActions } from "./store/language-slice";
import { messageSliceActions } from "./store/messages-slice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(languageSliceActions.initState());
    dispatch(messageSliceActions.fetchMessages());
  }, []);
  return (
    <Layout>
      <MainRoute />
    </Layout>
  );
}

export default App;
