import React from "react";
import UserForm from "../components/forms/UserForm";
import Sidebar from "../components/navbar/Sidebar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { userStore } from "../stores/UserStore";

function Profile() {
  const role = userStore((state) => state.role);
  return (
    <div className="Profile" id="profile-outer-container">
      <Sidebar
        pageWrapId={"profile-page-wrap"}
        outerContainerId={"profile-outer-container"}
      />
      <Header />
      <div className="page-wrap" id="profile-page-wrap">
        <h1>My Pawfile</h1>

        {userStore.getState().userDetails.role === "po" ? (
          <div>
            Product Owner: "Feline Visionary" - With a vision as clear as a cat
            focused on a laser dot, they keep the product moving towards its
            ultimate, purr-fect form
          </div>
        ) : (
          ""
        )}

        <UserForm />
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
