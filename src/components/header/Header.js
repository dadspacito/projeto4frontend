import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { userStore } from "../../stores/UserStore.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

//////////////////  FALTA LOGICA DE LOGOUT
//////////////////  FALTA LOGICA DE Carregar foto de perfil

function LogoutButton() {
  const navigate = useNavigate();
  function handleLogoutClick() {
    // Handle the logout logic here
    // For example, you can clear the user state and navigate to the login page
    navigate("/", { replace: true });
    console.log("Logging out...");
  }

  return (
    <button className="logout-button" onClick={handleLogoutClick}>
      <FontAwesomeIcon icon={faPowerOff} className="logout-icon" /> Logout
    </button>
  );
}

function Header() {
  const navigate = useNavigate();

  function handleUserClick() {
    navigate("/profile", { replace: true });
    console.log("User clicked on the profile icon");
  }

  const username = userStore((state) => state.username);
  console.log(username);
  // teste de foto
  let usernameProfile = "https://cataas.com/cat";

  return (
    <div className="header">
      <div className="profile-icon">
        <img
          src={usernameProfile}
          alt="Foto de perfil"
          onClick={handleUserClick}
        />
        <span>{username}</span>
      </div>{" "}
      <LogoutButton />
    </div>
  );
}

export default Header;
