import React from "react";
import Sidebar from "../components/navbar/Sidebar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import Board from "../components/board/Board";

// fazer componente pra mostrar as tarefas.....

function Scrumboard() {
  return (
    <div className="Scrumboard" id="scrumboard-outer-container">
      <Sidebar
        pageWrapId={"scrumboard-page-wrap"}
        outerContainerId={"scrumboard-outer-container"}
      />
      <Header />
      <div className="page-wrap" id="scrumboard-page-wrap">
        <h1>Scratch Board</h1>
        <h2>Here you can see the tasks of your project</h2>
        <Board />
      </div>
      <Footer />
    </div>
  );
}

export default Scrumboard;
