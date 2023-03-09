import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/register" element={<RegisterPage />} />

      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
