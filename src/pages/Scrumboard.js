import React from "react";
import Sidebar from "../components/navbar/Sidebar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useNavigate } from "react-router-dom";

function Activity() {
  return (
    <div className="Activity" id="activity-outer-container">
      <Sidebar
        pageWrapId={"activity-page-wrap"}
        outerContainerId={"activity-outer-container"}
      />
      <Header />
      <div className="page-wrap" id="activity-page-wrap">
        <h1>Scratch Board</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Activity;
