import React, { useEffect, useState } from "react";
// import { Contexto } from "../context/Context";
import MapComment from "./MapComment";
import axios from "axios";

function Comentario({ descripcion }) {
  // const { comentario } = useContext(Contexto);
  // const { comentarios } = comentario;
  const [zarnaHijueputa, setZarnaHijueputa] = useState("");
  const { id } = JSON.parse(localStorage.getItem("infoPost"));

  const { data } = zarnaHijueputa;

  // const { comentarios } = data;

  console.log(data);

  useEffect(() => {
    const funcionSalvadora = async () => {
      const initialNotes = await axios.get(
        `https://data-sprint-02.herokuapp.com/post/${id}`
      );
      setZarnaHijueputa(initialNotes);
    };
    funcionSalvadora();
  }, []);

  // console.log(comentarios);

  return (
    <div className="flex flex-col items-center justify-start">
      <p className="w-full max-w-4xl px-4 mt-4">{descripcion}</p>
      {/* {comentarios != null
        ? comentarios.map((e, i) => (
            <MapComment key={i} usuario={"kevin"} comentario={e.comentario} />
          ))
        : console.log("comentarios")} */}
    </div>
  );
}

export default Comentario;
