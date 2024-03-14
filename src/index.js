import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Scrumboard from "./pages/Scrumboard";
import Profile from "./pages/Profile";

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route index element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="scrumboard" element={<Scrumboard />} />
      <Route path="profile" element={<Profile />} />
      <Route path="login" element={<Login />} />
    </Routes>
  </Router>
);
