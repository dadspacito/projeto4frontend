import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { userStore } from "../../stores/UserStore.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import Swal from "sweetalert2";

function LogoutButton() {
  const navigate = useNavigate();

  async function logout() {
    const user = userStore.getState();

    try {
      const response = await fetch(
        `http://localhost:8080/scrumpurrfect/rest/user/logout`,
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            token: userStore.getState().token,
          },
        }
      );
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "See you soon," + user.userDetails.username + "!",
          showConfirmButton: false,
          timer: 1500,
          onClose: () => {
            sessionStorage.clear();
            console.log("ok...");
            navigate("/", { replace: true });
            console.log("deivia ter mudado..");
          },
        });
      } else {
        throw new Error("Failed to logout");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error,
        showConfirmButton: false,
        timer: 1500,
        onClose: () => {
          sessionStorage.clear();
          navigate("/", { replace: true });
        },
      });

      // caso dê erro, por proteção limpa estados e volta a pedir para fazer login
      sessionStorage.clear();
      navigate("/", { replace: true });
    }
  }

  function handleLogoutClick() {
    logout();
    //navigate("/", { replace: true });
  }

  return (
    <button className="logout-button" onClick={handleLogoutClick}>
      <FontAwesomeIcon icon={faPowerOff} className="logout-icon" /> Logout
    </button>
  );
}

export default LogoutButton;
