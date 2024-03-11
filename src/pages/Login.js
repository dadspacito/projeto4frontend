import React from "react";
import Footer from "../components/footer/Footer.js";
import "../index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userStore } from "../stores/UserStore.js";

import Swal from "sweetalert2";

// Define a função que mostra o formulário de login
export function showLoginForm(navigate, setUsername) {
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
  /* const [inputs, setInputs] = useState({});
   const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    navigate("/home", { replace: true });
  }; */

  //const setUsername = UserStore((state) => state.setUsername);

  // const [inputs, setInputs] = useState({});
  const navigate = useNavigate(); // `useNavigate` hook é definido aqui
  const setUsername = userStore((state) => state.setUsername);

  function handleLoginClick() {
    showLoginForm(navigate, setUsername);
  }

  // const handleLoginClick = () => {
  //   showLoginForm(navigate);
  //   //setUsername(username);

  return (
    <div>
      <div className="welcome-logo"></div>
      <div className="welcome-message">
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
      <button className="paw-button" onClick={handleLoginClick}>
        Show Login Form
      </button>
    </div>
  );
}

/* function Login() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    navigate("/home", { replace: true });
  };

  return (
    <div className="Login" id="login-outer-container">
      <div className="page-wrap" id="login-page-wrap">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Enter your username:
            <input
              type="text"
              name="username"
              defaultValue={inputs.username || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Enter your password:
            <input
              type="password"
              name="password"
              defaultValue={inputs.password || ""}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}
 */
export default Login;
