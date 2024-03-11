// construir o header

import React from "react";

import { userStore } from "../../stores/UserStore.js";

function Header() {
  const username = userStore((state) => state.username);
  console.log(username);

  return (
    <div className="Header">
      <h1> ola {username} e aqui aparece a foto, botao logout etc </h1>
    </div>
  );
}

export default Header;
