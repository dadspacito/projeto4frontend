import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userStore } from "../../stores/UserStore";
import Swal from "sweetalert2";
import ProfilePhoto from "./ProfilePhoto";

const UserForm = () => {
  const userDetails = userStore.getState().userDetails;
  const { userTargetDetails } = userStore();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    async function updateUser() {
      const response = await fetch(
        "http://localhost:8080/scrumpurrfect/rest/user/update",
        {
          method: "PUT",
          body: JSON.stringify(userStore.getState().userTargetDetails),
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            selectedUser: userStore.getState().userTargetDetails.username,
            token: userStore.getState().token,
          },
        }
      );
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Perfil atualizado com sucesso!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      //serStore.resetNewUserDetails();
      //navigate("/home");
    }

    updateUser();
  };

  return (
    <div>
      <div className="formStyle">
        <label>
          <h3>Purr-trait</h3>
        </label>
        <ProfilePhoto />
      </div>
      <form className="formStyle" onSubmit={handleSubmit}>
        {userTargetDetails.username === "" && userDetails.role === "po" ? (
          <label>
            Username:
            <input type="text" value="Choose wise, Code Whiskerer" />
          </label>
        ) : (
          <label>
            Username:
            <input type="placeholder" value={userTargetDetails.username} />
          </label>
        )}
        <label> First Name: </label>
        <input
          type="text"
          value={userTargetDetails.firstname}
          onChange={(e) =>
            userStore.getState().updateUserTargetDetails({
              firstname: e.target.value,
            })
          }
        />
        <label> Last Name: </label>
        <input
          type="text"
          value={userTargetDetails.lastname}
          onChange={(e) =>
            userStore.getState().updateUserTargetDetails({
              lastname: e.target.value,
            })
          }
        />
        <label> Email: </label>
        <input
          type="text"
          value={userTargetDetails.email}
          onChange={(e) =>
            userStore.getState().updateUserTargetDetails({
              email: e.target.value,
            })
          }
        />
        <label> Phone: </label>
        <input
          type="text"
          value={userTargetDetails.phone}
          onChange={(e) =>
            userStore.getState().updateUserTargetDetails({
              phone: e.target.value,
            })
          }
        />

        <label>Role:</label>

        <select value={userTargetDetails.role}>
          <option value="dev">"Code Whiskerer" - Developer</option>
          <option value="sm">"Purrr-ject Herder" - Scrum Master</option>
          <option value="po">"Feline Visionary" - Product Owner</option>
        </select>
        <br />

        <input type="submit" value="Update profile" />
      </form>
    </div>
  );
};

export default UserForm;
