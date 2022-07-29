import React from "react";
import MapComment from "./MapComment";

function Comentario({ descripcion, objeto, estado, setEstado }) {
  return (
    <div className="flex flex-col items-center justify-start">
      <p className="w-full max-w-4xl px-4 mt-4">{descripcion}</p>

      {
        objeto.arreglo.map( (e,i) => (

          <MapComment usuario={e.} comentario={e.} key={i}/>
        ))
      }
    </div>
  );
}

export default Comentario;
