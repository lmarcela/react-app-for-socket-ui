import React from "react";
import { Navigate } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";

export const PublicRoute = ({ isAuthenticated }) => {
  return !isAuthenticated ? <AuthRouter /> : <Navigate to="/" />;
};
