import React from "react";
import { useEffect } from "react";
import {
  Navigate,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import { userStore } from "./stores/UserStore";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Scrumboard from "./pages/Scrumboard";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import Swal from "sweetalert2";
import "./index.css";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = userStore.getState().isLoggedIn();

  // comentar se pretendo que o alerta não apareça, para que o utilizador não saiba que o path existe

  useEffect(() => {
    if (!isLoggedIn) {
      Swal.fire({
        icon: "error",
        title: "You must be logged in to access this page!",
        showConfirmButton: true,
        timer: 3000,
      });
    }
  }, [isLoggedIn]);

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

const PrivateProductOwnerRoute = ({ children }) => {
  const isLoggedIn = userStore.getState().isLoggedIn();
  const role = userStore.getState().userDetails.role;

  // comentar se pretendo que o alerta não apareça, para que o utilizador !productOwner não saiba que o path existe

  useEffect(() => {
    if (isLoggedIn && role !== "po") {
      Swal.fire({
        icon: "error",
        title: "You are not a Product Owner!",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  }, [isLoggedIn, role]);

  return isLoggedIn && role === "po" ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route index element={<App />} />

      <Route path="*" element={<Navigate to="/login" replace />} />

      <Route path="login" element={<Login />} />

      <Route
        path="home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="scrumboard"
        element={
          <PrivateRoute>
            <Scrumboard />
          </PrivateRoute>
        }
      />
      <Route
        path="profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path="users"
        element={
          <PrivateRoute>
            <PrivateProductOwnerRoute>
              <Users />
            </PrivateProductOwnerRoute>
          </PrivateRoute>
        }
      />
    </Routes>
  </Router>
);
