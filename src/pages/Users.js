// import React from "react";
// import Sidebar from "../components/navbar/Sidebar";
// import Header from "../components/header/Header";
// import Footer from "../components/footer/Footer";
// import UsersList from "../components/userslist/Userlist";
// import useFetch from "react-fetch-hook";
// import { useNavigate } from "react-router-dom";
// import { userStore } from "../stores/UserStore";

// function Users() {
//   const token = userStore((state) => state.token); // Acessar o token da store

//   const { isLoading, users, error } = useFetch(
//     "http://localhost:8080/scrumpurrfect/rest/user/all",
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "*/*",
//         token: token,
//         // Authorization: `Bearer ${token}`, // Assumindo que o token é enviado no header Authorization
//       },
//     }
//   );

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   //const users = [];

//   /* for (let i = 1; i <= 12; i++) {
//     users.push(<div className="user">User {i}</div>);
//   } */

//   // criar cada user como objeto- link para o perfil
//   // fazer um map para cada user
//   // fazer um link para o perfil de cada user
//   // fazer um componente para cada user
//   users.map((user) => {
//     return (
//       <div className="user">
//         <a href={"/profile/" + user.id}>{user.username}</a>
//       </div>
//     );
//   });

//   return (
//     <div className="Users" id="users-outer-container">
//       <Sidebar
//         pageWrapId={"users-page-wrap"}
//         outerContainerId={"users-outer-container"}
//       />
//       <Header />
//       <div className="page-wrap" id="users-page-wrap">
//         <UsersList />
//         <h1>The Feline Assembly</h1>

//         <div className="users-container">{users} </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

//export default Users;

import React from "react";
import Sidebar from "../components/navbar/Sidebar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import UsersList from "../components/userslist/Userlist";
import useFetch from "react-fetch-hook";
import { useNavigate } from "react-router-dom";
import { userStore } from "../stores/UserStore";

function Users() {
  const token = userStore((state) => state.token); // Access the token from the store
  const navigate = useNavigate();

  const {
    isLoading,
    data: users,
    error,
  } = useFetch("http://localhost:8080/scrumpurrfect/rest/user/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      token: token,
      // Authorization: `Bearer ${token}`, // Assuming the token is sent in the Authorization header
    },
  });

  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Error: {error.message}</div>;

  const editProfile = async (username) => {
    // e.preventDefault();
    // fetch user to get details
    const user = await fetch(
      "http://localhost:8080/scrumpurrfect/rest/user/getDetails",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          selectedUser: username,
          token: token,
        },
      }
    );
    const userJson = await user.json();
    console.log(userJson);
    userStore.getState().updateUserTargetDetails(userJson);

    navigate("/profile");
  };

  // Map each user to a link to their profile
  const userElements = users?.map((user) => (
    <div
      className="user"
      key={user.username}
      onClick={() => editProfile(user.username)}
    >
      <div className="photoUserlist">
        <img
          src={user.photoURL}
          alt={`${user.username}'s photo`}
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </div>
      <a>{user.username}</a>
    </div>
  ));

  return (
    <div className="Users" id="users-outer-container">
      <Sidebar
        pageWrapId={"users-page-wrap"}
        outerContainerId={"users-outer-container"}
      />
      <Header />
      <div className="page-wrap" id="users-page-wrap">
        <UsersList />
        <h1>The Feline Assembly</h1>
        <div className="users-container">{userElements}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Users;
