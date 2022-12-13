import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import DeletedPage from "../Pages/MessageBox/DeletedPage";
import DraftPage from "../Pages/MessageBox/DraftPage";
import InboxPage from "../Pages/MessageBox/InboxPage";
import SendPage from "../Pages/MessageBox/SendPage";

const HomeRoute = () => {
  return (
    <Fragment>
      <Routes>
        <Route
          path=""
          element={
            <div>
              {" "}
              <h1>Information</h1>{" "}
            </div>
          }
        />
        <Route path="inbox" element={<InboxPage />} />
        <Route path="sent" element={<SendPage />} />
        <Route path="draft" element={<DraftPage />} />
        <Route path="deleted" element={<DeletedPage />} />
      </Routes>
    </Fragment>
  );
};

export default HomeRoute;
