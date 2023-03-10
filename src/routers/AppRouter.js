import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { auth, validateToken } = useContext(AuthContext);

  useEffect(() => {
    validateToken();
  }, [validateToken]);

  if (auth.checking) {
    return <h1>Espere por favor</h1>;
  }
  return (
    <Router>
      <Routes>
        <Route
          path="/auth/*"
          element={<PublicRoute isAuthenticated={auth.logged} />}
        />
        <Route
          path="/"
          element={<PrivateRoute isAuthenticated={auth.logged} />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
