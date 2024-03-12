import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function RegistryForm() {
  const MySwal = withReactContent(Swal);

  const handleSubmit = (values) => {
    console.log("Formulário submetido", values);
    // Aqui você pode adicionar a lógica de submissão do formulário, como enviar os dados para um servidor.
  };

  const openForm = () => {
    MySwal.fire({
      title: "Preencha os dados",
      html: `
            <input id="name" class="swal2-input" placeholder="Nome">
            <input id="email" class="swal2-input" placeholder="Email">
          `,
      focusConfirm: false,
      preConfirm: () => {
        const name = Swal.getPopup().querySelector("#name").value;
        const email = Swal.getPopup().querySelector("#email").value;
        if (!name || !email) {
          Swal.showValidationMessage(`Por favor, preencha todos os campos`);
          return;
        }
        return { name, email };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        handleSubmit(result.value); // Aqui você pode chamar a função de submissão do formulário
        Swal.fire(`Nome: ${result.value.name}, Email: ${result.value.email}`);
      }
    });
  };

  return (
    <div>
      <button onClick={openForm()}>Abrir formulário</button>
    </div>
  );
}

export default RegistryForm;
