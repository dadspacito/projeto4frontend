import React, { useEffect, useState } from "react";
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
    // Handle the user click logic here

    // apagar os states
    // For example, you can navigate to the profile page

    navigate("/profile", { replace: true });
    console.log("User clicked on the profile icon");
  }

  const username = userStore((state) => state.username);
  console.log(username);

  // problema do CORS REVER
  // teste de foto
  //let usernameProfile = "https://cataas.com/cat";

  // isto vai ser usado não aqui mas na parte de fazer get de foto de perfil ao criar ou editar
  // fazer um pedido fetch a api para ir buscar a foto de perfil

  async function fetchProfilePhoto() {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);

        // obter o atributo url da resposta como string

        console.log(JSON.stringify(data[0].url));
        return data[0].url;
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  }
  //let foto = "https://cdn2.thecatapi.com/images/MTgwNTYxMg.jpg";

  // ativar

  let [foto, setFoto] = useState(
    "https://cdn2.thecatapi.com/images/MTgwNTYxMg.jpg"
  );

  const myfunction = async () => {
    let ab = await fetchProfilePhoto();
    console.log(ab);
    setFoto(ab);
  };

  useEffect(() => {
    myfunction();
  }, []);

  return (
    <div className="header">
      <div className="profile-icon">
        <img src={foto} alt="Foto de perfil" onClick={handleUserClick} />
        <span>{username}</span>
      </div>{" "}
      <LogoutButton />
    </div>
  );
}

export default Header;
