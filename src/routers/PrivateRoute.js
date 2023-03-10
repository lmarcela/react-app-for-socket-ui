import React from "react";
import { Navigate } from "react-router-dom";
import { ChatPage } from "../pages/ChatPage";

export const PrivateRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <ChatPage /> : <Navigate to="/auth/login" />;
};
