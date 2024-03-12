import React from "react";
import Sidebar from "../components/navbar/Sidebar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../index.css";
import { useNavigate } from "react-router-dom";
function Home() {
  return (
    <div>
      <div className="Home" id="home-outer-container">
        <Sidebar
          pageWrapId={"home-page-wrap"}
          outerContainerId={"home-outer-container"}
        />{" "}
        <Header />{" "}
        <div className="page-wrap" id="home-page-wrap">
          <h1>Home</h1>
        </div>{" "}
    
      </div>
     <Footer />
    </div>
  );
}
export default Home;
