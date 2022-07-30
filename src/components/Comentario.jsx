import React, { useEffect, useState, useContext } from "react";
import { Contexto } from "../context/Context";
import MapComment from "./MapComment";
import axios from "axios";
import { getData } from "../helpers/CRUD";

function Comentario({ descripcion }) {
  // const { comentario } = useContext(Contexto);
  // const { comentarios } = comentario;
  const [zarnaHijueputa, setZarnaHijueputa] = useState(null);
  const { id } = JSON.parse(localStorage.getItem("infoPost"))
  const url = `https://data-sprint-02.herokuapp.com/post/${id}`


  useEffect(() => {
    getData(setZarnaHijueputa, url)
  }, [zarnaHijueputa]);

  return (
    <div className="flex flex-col items-center justify-start">
      <p className="w-full max-w-4xl px-4 mt-4">{descripcion}</p>
      {zarnaHijueputa != null
        ? zarnaHijueputa.comentarios.map((e, i) => (
          <MapComment key={i} usuario={"kevin"} comentario={e.comentario} />
        ))
        : console.log("comentarios")}
    </div>
  );

}

export default Comentario;
