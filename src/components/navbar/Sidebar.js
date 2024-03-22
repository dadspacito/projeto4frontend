import React, { useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";
import RegistryForm from "../forms/RegistryForm";
import { userStore } from "../../stores/UserStore";
import MyClock from "./Clock";

export default (props) => {
  /*  const openRegistryForm = () => {
    RegistryForm();
  }; */

  return (
    <Menu>
      <a className="menu-item" href="/home">
        Home
      </a>
      <a className="menu-item" href="/scrumboard">
        Scratch Board
      </a>
      <a
        className="menu-item"
        href="/profile"
        onClick={userStore((state) => state.editMyProfile)}
      >
        My Paw-file
      </a>
      {/*   <a className="menu-item" onClick={openRegistryForm}>
        New Purr-ticipant{" "}
      </a> */}
      {userStore.getState().userDetails.role === "po" ? (
        <a className="menu-item" href="/users">
          The Feline Assembly
        </a>
      ) : (
        ""
      )}

      <a className="menu-item">Recruit Fur-mate</a>
      <a className="menu-item"></a>
      <a className="menu-item"></a>

      <MyClock />
    </Menu>
  );
};
