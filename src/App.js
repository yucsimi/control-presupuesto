import "./App.css";
import React, {useState, useEffect} from "react";
import Pregunta from "./Componentes/Pregunta";
import Formulario from "./Componentes/Forms";
import Listado from "./Componentes/Listado";
import ControlPresupuesto from "./Componentes/ControlPresupuesto";

function App() {
  //definir el state

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGasto] = useState([]);
  const [gasto, guardarGastoo] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);

  //useefect que actualiza el restante
  useEffect(() => {
    if (creargasto) {
      //agrgael nuevo presupuesto
      guardarGasto([...gastos, gasto]);
      //resta el presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      //resetear a false
      guardarCrearGasto(false);
    }
  }, [gasto, creargasto, gastos, restante]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  guardarGastoo={guardarGastoo}
                  guardarCrearGasto={guardarCrearGasto}
                />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
