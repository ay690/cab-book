import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import CabContextProviderr from "./components/CabContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CabContextProviderr>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </CabContextProviderr>
);
