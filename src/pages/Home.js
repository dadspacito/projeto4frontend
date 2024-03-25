import React, { useEffect } from "react";
import Sidebar from "../components/navbar/Sidebar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { userStore } from "../stores/UserStore";
import "../index.css";
import UserForm from "../components/forms/UserForm";

function Home() {
  useEffect(() => {
    async function fetchData() {
      // Buscar token e selectedUser da store
      const token = userStore.getState().token;
      const selectedUser = userStore.getState().userDetails.username;

      try {
        const response = await fetch(
          "http://localhost:8080/scrumpurrfect/rest/user/getDetails",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "*/*",
              selectedUser: selectedUser,
              token: token,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);

          // Atualizar os detalhes do user na store

          userStore.getState().updateUserDetails({
            email: data.email,
            firstname: data.firstname,
            lastname: data.lastname,
            phone: data.phone,
            photoURL: data.photoURL,
          });
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    }
    fetchData();
  }, [userStore.getState().token, userStore.getState().userDetails]);

  return (
    <div className="Home" id="home-outer-container">
      <Sidebar
        pageWrapId={"home-page-wrap"}
        outerContainerId={"home-outer-container"}
      />
      <Header />
      <div className="page-wrap" id="home-page-wrap">
        <h1>Home</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
