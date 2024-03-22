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
        {userTargetDetails.username === "" && userDetails.role === "po" && (
          <label>
            Username:
            <input type="text" value="Choose wise, Code Whiskerer" />
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
        <label>
          <select>
            <option value="Ford">Ford</option>
            <option value="Volvo" selected>
              Volvo
            </option>
            <option value="Fiat">Fiat</option>
          </select>
          <input
            type="radio"
            name="role"
            value="dev"
            style={{ transform: "scale(1)", margin: "5px" }}
          />
        </label>
        <label>
          Scrum Master: "Purr-ject Herder"
          <input type="radio" name="role" value="sm" />
        </label>
        <label>
          Product Owner: "Feline Visionary"
          <input type="radio" name="role" value="po" />
        </label>

        {userDetails.role === "p" ? (
          <input
            type="text"
            value={userTargetDetails.role}
            onChange={(e) =>
              userStore.getState().updateUserTargetDetails({
                role: e.target.value,
              })
            }
          />
        ) : (
          <input type="placeholder" value={userTargetDetails.role} />
        )}

        <input type="submit" value="Update profile" />
      </form>
    </div>
  );
};

export default UserForm;
