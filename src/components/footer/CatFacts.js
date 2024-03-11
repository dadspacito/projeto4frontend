import React, { useState, useEffect } from "react";

function RandomCatFact() {
  // Estado para armazenar o texto da API
  const [text, setText] = useState("");
  // Função para buscar o texto da API
  const fetchText = async () => {
    try {
      // Realiza a requisição à API
      const response = await fetch("https://catfact.ninja/fact");
      // Verifica se a requisição foi bem-sucedida
      if (response.ok) {
        // Converte a resposta para JSON
        const data = await response.json();
        // Atualiza o estado com o texto obtido da API
        setText(data.fact); // Ajuste para obter o campo "fact" do objeto de resposta
      } else {
        // Se a requisição não foi bem-sucedida, lança um erro
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // Efeito para buscar o texto da API quando o componente for montado
  useEffect(() => {
    const intervalId = setInterval(fetchText, 10000);

    fetchText();

    // Retorna uma função de limpeza para interromper o temporizador quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []); // A dependência vazia indica que este efeito é executado apenas uma vez, quando o componente é montado

  return (
    <div className="trivia-box">
      {/* Exibe o texto obtido da API */}
      <p>{text}</p>
    </div>
  );
}

export default RandomCatFact;
