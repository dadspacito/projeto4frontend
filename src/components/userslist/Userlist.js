import React from "react";
import useFetch from "react-fetch-hook";
import { userStore } from "../../stores/UserStore";
import Swal from "sweetalert2";

function UsersList() {
  const token = userStore((state) => state.token); // Acessar o token da store

  const { isLoading, data, error } = useFetch(
    "http://localhost:8080/scrumpurrfect/rest/user/all",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        token: token,
        // Authorization: `Bearer ${token}`, // Assumindo que o token é enviado no header Authorization
      },
    }
  );

  if (isLoading) return Swal.showLoading();
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.username}</li> // Ajuste de acordo com a estrutura do seu objeto user
      ))}
    </ul>
  );
}

export default UsersList;
