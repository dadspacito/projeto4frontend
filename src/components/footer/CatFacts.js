import React, { useState, useEffect } from "react";

function RandomCatFact() {
  const [text, setText] = useState("");

  const fetchText = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");

      if (response.ok) {
        const data = await response.json();
        setText(data.fact);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(fetchText, 10000);

    fetchText();

    // Retorna uma função de limpeza para interromper o temporizador quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []); // A dependência vazia indica que este efeito é executado apenas uma vez, quando o componente é montado

  return (
    <div className="trivia-box">
      <p>{text}</p>
    </div>
  );
}

export default RandomCatFact;
