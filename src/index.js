import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Activity from "./pages/Activity";
import Profile from "./pages/Profile";
import Footer from "./components/footer/Footer";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="activity" element={<Activity />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
