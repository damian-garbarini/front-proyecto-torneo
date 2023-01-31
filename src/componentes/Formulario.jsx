import React, { useState,} from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const Formulario = () => {

  const URL = "https://back-proyecto-torneo-production.up.railway.app/crear";

  const [inputs, setInputs] = useState({
    nombre: "",
    equipos: "",
    dni: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = async () => {
    await axios.post(URL, inputs);
    setInputs({
      nombre: "",
      equipos: "",
      dni: "",
    });

    Swal.fire({
      title: "Dato enviado Correctamente",
      text: "Gracias por enviar sus Datos",
      icon: "success",
      confirmButtonText: "Aceptar"
    });
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="m-4">Anotate al torneo "Sigue girando" </h2>
      {Object.keys(inputs).map((key, index) => (
        <Form.Group className="pt-3" key={index} style={{ maxWidth: "200px" }}>
          <Form.Label id="form">
            {key === "dni" ? key.toUpperCase() : key[0].toUpperCase() + key.slice(1)}</Form.Label>
          <Form.Control
            name={key}
            value={inputs[key]}
            onChange={handleChange}
          />
        </Form.Group>
      ))}
      <Button className="mt-3" onClick={handleClick}>Enviar</Button>
    </div>
  );
};

export default Formulario;
