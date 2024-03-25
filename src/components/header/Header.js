import React, { useEffect, useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { userStore } from "../../stores/UserStore.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import LogoutButton from "./Logout.js";

//////////////////  FALTA LOGICA DE LOGOUT

// function LogoutButton() {
//   const navigate = useNavigate();
//   function handleLogoutClick() {
//     // Handle the logout logic here
//     // For example, you can clear the user state and navigate to the login page
//     // alerta saída.
//     navigate("/", { replace: true });
//     console.log("Logging out...");
//   }

//   return (
//     <button className="logout-button" onClick={handleLogoutClick}>
//       <FontAwesomeIcon icon={faPowerOff} className="logout-icon" /> Logout
//     </button>
//   );
// }

function Header() {
  const navigate = useNavigate();

  function handleUserClick() {
    navigate("/profile", { replace: true });
    console.log("User clicked on the profile icon");
  }

  const username = userStore.getState().userDetails.username;
  console.log(username);

  const photoURL = userStore.getState().userDetails.photoURL;
  useEffect(() => {
    const photoURL = userStore.getState().userDetails.photoURL;
  }, [photoURL]);

  return (
    <div className="header">
      <div className="profile-icon">
        <img src={photoURL} alt="Foto de perfil" onClick={handleUserClick} />
        <span>{username}</span>
      </div>{" "}
      <LogoutButton />
    </div>
  );
}

export default Header;
