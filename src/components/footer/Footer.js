import React, { useState, useEffect } from "react";
import RandomCatFact from "./CatFacts.js"; // Importe o componente RandomCatFact
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <RandomCatFact />

      <p>© 2024 Scrum Purrfect</p>
    </div>
  );
}

export default Footer;
