import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MovieNamesApp } from "./MovieNamesApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MovieNamesApp />
  </React.StrictMode>
);
