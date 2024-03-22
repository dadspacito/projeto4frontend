import React from "react";
import Footer from "../components/footer/Footer.js";
import "../index.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userStore } from "../stores/UserStore.js";
import Swal from "sweetalert2";

function showLoginForm(navigate, setUser, setToken) {
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
        return false; // Interrompe o fluxo aqui caso username/password não sejam inseridos
      }

      Swal.showLoading(); // Mostra o loader enquanto o fetch é processado
      return fetch("http://localhost:8080/scrumpurrfect/rest/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          username: username,
          password: password,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          // Processa os dados de resposta da API aqui
          // Por exemplo, verificar se o login foi bem-sucedido baseado na resposta
          return data; // Retorna os dados para serem usados no then() após o Swal.fire
        })
        .catch((error) => {
          Swal.showValidationMessage(`Request failed: ${error}`);
          return false; // Interrompe o fluxo em caso de erro na requisição
        });
    },
  })
    .then((result) => {
      if (result.isConfirmed && result.value) {
        // imprimir o resultado do fetch
        /*   console.log(result.value);
        console.log(result.value.username);
        console.log(result.value.password);
        // Aqui você lida com a resposta após o login bem-sucedido
        setUsername(result.value.username); // Exemplo de atualização do estado do usuário
        // fazer set do token, etc */

        // Atualiza o estado global com os detalhes do user
        setUser({
          username: result.value.username,
          role: result.value.role,
        });
        setToken(result.value.token);

        // Acessa o estado atual da store
        const currentState = userStore.getState();

        // Acessa e imprime o valor do token
        console.log("Token:", currentState.token);

        // Acessa e imprime os detalhes do usuário
        console.log("User Details:");
        console.log("Username:", currentState.userDetails.username);
        console.log("First Name:", currentState.userDetails.firstname);
        console.log("Last Name:", currentState.userDetails.lastname);
        console.log("Email:", currentState.userDetails.email);
        console.log("Photo URL:", currentState.userDetails.photoURL);
        console.log("Phone:", currentState.userDetails.phone);
        console.log("Role:", currentState.userDetails.role);

        navigate("/home", { replace: true });
        console.log(result.value);
      }
    })
    .catch((error) => {
      // Aqui você pode tratar ou exibir erros que ocorreram no processo
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      navigate("/", { replace: true });
    });
}

// E em seu componente React, você pode chamar essa função, por exemplo, em um manipulador de eventos:
function Login() {
  const navigate = useNavigate();

  const setUser = userStore.getState().updateUserDetails;
  const setToken = userStore.getState().setToken;

  const handleLoginClick = () => {
    showLoginForm(navigate, setUser, setToken);
  };

  // determinar um timeout de 2 segundos para disparar o use effect

  useEffect(() => {
    setTimeout(() => {
      showLoginForm(navigate, setUser, setToken);
    }, 5000);
  }, []);

  // const handleLoginClick = () => {
  //   showLoginForm(navigate);
  //   //setUsername(username);

  return (
    <div className="login">
      <h1>Welcome to Scrum Purrfect! 🐾</h1>
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
          Show Login Form 🐾
        </button>
      </div>
    </div>
  );
}

export default Login;
