import React from "react";
import Sidebar from "../components/navbar/Sidebar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useNavigate } from "react-router-dom";

function Users() {
  const users = [];
  for (let i = 1; i <= 12; i++) {
    users.push(<div className="user">User {i}</div>);
  }

  return (
    <div className="Users" id="users-outer-container">
      <Sidebar
        pageWrapId={"users-page-wrap"}
        outerContainerId={"users-outer-container"}
      />
      <Header />
      <div className="page-wrap" id="users-page-wrap">
        <h1>The Feline Assembly</h1>

        <div className="users-container">{users}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Users;
