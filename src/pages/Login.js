import React, { useEffect } from "react";
import Footer from "../components/footer/Footer.js";
import "../index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userStore } from "../stores/UserStore.js";
import Swal from "sweetalert2";

// Função que exibe um formulário de login usando SweetAlert2
// O parâmetro `navigate` é uma função que pode ser usada para navegar para uma nova rota
// O parâmetro `setUsername` é uma função que pode ser usada para atualizar o nome de utilizador no estado global

function showLoginForm(navigate, setUsername) {
  Swal.fire({
    title: "Login Form",
    html: `
      <input type="text" id="username" class="swal2-input" placeholder="Username">
      <input type="password" id="password" class="swal2-input" placeholder="Password">
    `,
    confirmButtonText: "Sign in",
    focusConfirm: false,
    didOpen: () => {
      const popup = Swal.getPopup();
      const usernameInput = popup.querySelector("#username");
      const passwordInput = popup.querySelector("#password");
      usernameInput.onkeyup = (event) =>
        event.key === "Enter" && Swal.clickConfirm();
      passwordInput.onkeyup = (event) =>
        event.key === "Enter" && Swal.clickConfirm();
    },
    preConfirm: () => {
      const popup = Swal.getPopup();
      const username = popup.querySelector("#username").value;
      const password = popup.querySelector("#password").value;
      if (!username || !password) {
        Swal.showValidationMessage(`Please enter username and password`);
      }
      return { username, password };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      // ASSOCIAR O VALOR DE USERNAME AO USERSTATE

      setUsername(result.value.username);

      // Faça algo com os valores de username e password
      // const setUsername = userStore((state) => state.setUsername);
      // setUsername(result.value.username); // Atualize o nome de usuário usando setUsername
      // result.value.username = userStore((state) => state.setUsername);
      navigate("/home", { replace: true });
      console.log(result.value);
    }
  });
}

// E em seu componente React, você pode chamar essa função, por exemplo, em um manipulador de eventos:
function Login() {
  const navigate = useNavigate(); // `useNavigate` hook é definido aqui
  const setUsername = userStore((state) => state.setUsername);

  function handleLoginClick() {
    showLoginForm(navigate, setUsername);
  }

  // determinar um timeout de 2 segundos para disparar o use effect

  useEffect(() => {
    setTimeout(() => {
      showLoginForm(navigate, setUsername);
    }, 3000);
  }, []);

  // const handleLoginClick = () => {
  //   showLoginForm(navigate);
  //   //setUsername(username);

  return (
    <div className="login">
      <div className="welcome-logo"></div>
      <div className="welcome-message">
        <p>
          Welcome to the Scrum Purrfect, where every task is a step closer to
          cat-ching your goals! Don't fur-get to check your daily tasks;
          remember, a little progress each day adds up to big results. Let's
          claw our way through those sprints together and make every milestone a
          meow-mentous achievement!
        </p>
        <p>
          We're feline excited to have you join our community of agile
          enthusiasts! At Scrum Purrfect, we're dedicated to providing you with
          the purrfect tools and resources to streamline your project management
          experience.
        </p>
        <p>
          Whether you're a seasoned scrum master or just starting your agile
          journey, you're in for a treat! Dive into our intuitive interface,
          designed to make sprint planning, task management, and collaboration a
          paw-sitive experience.
        </p>
        <p>
          Stay organized, stay efficient, and most importantly, stay purrfectly
          agile with Scrum Purrfect!
        </p>
        <p>Happy sprinting! 🚀</p>
      </div>{" "}
      <div>
        <button className="paw-button" onClick={handleLoginClick}>
          Show Login Form
        </button>
      </div>
    </div>
  );
}

export default Login;
