import React, { useEffect } from "react";
import "./App.css";
import Login from "./pages/Login";
import Footer from "./components/footer/Footer";
import { userStore } from "./stores/UserStore";

function App() {
  //useEffect(() => {
  // fazer chamadas de serviços sempre que houver alterações no estado de user ou task
  // REVER TESTAR ESTA PARTE
  // userStore.getState().updateUserDetails({

  return (
    <div className="App" id="outer-container">
      <div className="page-wrap" id="app-page-wrap">
        <Login />
      </div>{" "}
    </div>
  );
}

export default App;
