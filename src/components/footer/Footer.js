import React, { useState, useEffect } from "react";
import RandomCatFact from "./CatFacts.js"; // Importe o componente RandomCatFact
import "./Footer.css";

function Footer() {
  console.log("Footer renderizado");
  return (
    <div className="footer">
      <RandomCatFact />© {new Date().getFullYear()} Scrum Purrfect - Pawsitively
      Agile. All rights reserved.
    </div>
  );
}

export default Footer;
