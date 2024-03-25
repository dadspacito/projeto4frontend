import React from "react";
import Footer from "../components/footer/Footer.js";
import "../index.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userStore } from "../stores/UserStore.js";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  const setUser = userStore.getState().updateUserDetails;
  const setToken = userStore.getState().setToken;
  const handleLoginClick = () => {
    showLoginForm(navigate, setUser, setToken);
  };

  useEffect(() => {
    setTimeout(() => {
      showLoginForm(navigate, setUser, setToken);
    }, 5000);
  }, []);

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
          return false;
        }

        Swal.showLoading();

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
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
            return false;
          });
      },
    })
      .then((result) => {
        if (result.isConfirmed && result.value) {
          setUser({
            username: result.value.username,
            role: result.value.role,
          });
          setToken(result.value.token);

          navigate("/home", { replace: false });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        navigate("/", { replace: true });
      });
  }

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
      <button className="paw-button" onClick={handleLoginClick}>
        Show Login Form 🐾
      </button>{" "}
      <Footer />
    </div>
  );
}

export default Login;
