import React from "react";
import {revisarPresupesto} from "../helper";
const ControlPresupuesto = ({presupuesto, restante}) => {
  return (
    <div>
      <div className="alert alert-primary">Presupuesto: $ {presupuesto} </div>
      <div className={revisarPresupesto(presupuesto, restante)}>
        Restante: $ {restante}{" "}
      </div>
    </div>
  );
};

export default ControlPresupuesto;
