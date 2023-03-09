import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { ChatPage } from "../pages/ChatPage";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route exact path="/" element={<ChatPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
