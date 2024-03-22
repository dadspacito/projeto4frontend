import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Footer from "./components/footer/Footer";
import { userStore } from "./stores/UserStore";

function App() {
  return (
    <div className="App" id="outer-container">
      <div className="page-wrap" id="app-page-wrap">
        <Login />
      </div>{" "}
      <Footer />
    </div>
  );
}

export default App;
