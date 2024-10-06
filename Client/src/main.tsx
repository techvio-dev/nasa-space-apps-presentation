import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./components/pages/landing";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
