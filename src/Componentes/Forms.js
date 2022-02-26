import React, {useState} from "react";
import Error from "./Error";
import shortid from "shortid";

/////

const Formulario = ({guardarGastoo, guardarCrearGasto}) => {
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  // cuando el usuario agrega un gasto
  const agregarGasto = (e) => {
    e.preventDefault();

    //validar

    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
    // coonstruir el gasto

    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };

    //pasar el gasto al componente principal
    guardarGastoo(gasto);
    guardarCrearGasto(true);
    // resetear al form
    guardarNombre("");
    guardarCantidad();
  };

  /////
  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aqui</h2>

      {error ? (
        <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" />
      ) : null}
      <div className="campo">
        <label>Nombre del Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => guardarNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Cantidad del Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => guardarCantidad(parseInt(e.target.value, 10))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="agregar gasto"
      />
    </form>
  );
};

export default Formulario;
