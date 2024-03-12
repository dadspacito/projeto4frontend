import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";
import RegistryForm from "../forms/RegistryForm";

export default (props) => {
  return (
    <Menu>
      <a className="menu-item" href="/home">
        Home
      </a>
      <a className="menu-item" href="/scrumboard">
        Scratch Board
      </a>
      <a className="menu-item" href="/profile">
        My Paw-file{" "}
      </a>
      <RegistryForm />
    </Menu>
  );
};
