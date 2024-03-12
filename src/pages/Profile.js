import React from "react";
import Sidebar from "../components/navbar/Sidebar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useNavigate } from "react-router-dom";

function Profile() {
  return (
    <div className="Profile" id="profile-outer-container">
      <Sidebar
        pageWrapId={"profile-page-wrap"}
        outerContainerId={"profile-outer-container"}
      />
      <Header />
      <div className="page-wrap" id="profile-page-wrap">
        <h1>My Profile</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
