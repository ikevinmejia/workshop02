import React, { useEffect, useState, useContext } from "react";
import { Contexto } from "../context/Context";
import MapComment from "./MapComment";
import axios from "axios";

function Comentario({ descripcion }) {
  const { comentario: coment } = useContext(Contexto);
  const { comentarios } = coment;
  // const [zarnaHijueputa, setZarnaHijueputa] = useState("");
  const { id } = JSON.parse(localStorage.getItem("infoPost"));

  // const { comentarios: dataAxios } = zarnaHijueputa.data;

  // useEffect(() => {
  //   const funcionSalvadora = async () => {
  //     const initialNotes = await axios.get(
  //       `https://data-sprint-02.herokuapp.com/post/${id}`
  //     );
  //     setZarnaHijueputa(initialNotes);
  //   };
  //   funcionSalvadora();
  // }, []);

  // console.log(dataAxios);

  return (
    <div className="flex flex-col items-center justify-start">
      <p className="w-full max-w-4xl px-4 mt-4">{descripcion}</p>
      {/* {dataAxios != null
        ? dataAxios.map((e) => (
            <MapComment key={e} usuario={"kevin"} comentario={e.comentario} />
          ))
        : console.log(comentarios)} */}
    </div>
  );
}

export default Comentario;
