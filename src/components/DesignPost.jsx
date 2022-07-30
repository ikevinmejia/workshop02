import React, { useContext } from "react";
import corazon from "../images/corazon.png";
import comentarios from "../images/comentarios.png";
import enviar from "../images/enviar.png";
import guardado from "../images/guardado.png";
import { Contexto } from "../context/Context";
import { useNavigate } from "react-router-dom";

const DesignPost = ({ imagen, descripcion, nombre, id }) => {
  const { dataPost, setComentario } = useContext(Contexto);
  const navigate = useNavigate();

  const onClick = ({ target }) => {
    const postClicked = dataPost.find((e) => e.id === Number(target.id));
    setComentario(postClicked);
    localStorage.setItem("infoPost", JSON.stringify(postClicked));
    // console.log(postClicked);
    navigate("/detalle");
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={imagen}
          alt=""
          id={id}
          onClick={(e) => onClick(e)}
        />
      </a>
      <div className="flex items-center justify-between px-3 mt-2">
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center justify-center gap-1">
            <img src={corazon} alt="" />
            <p className="text-xs">300K</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <img src={comentarios} alt="" />
            <p className="text-xs">150K</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <img src={enviar} alt="" />
            <p className="text-xs">26K</p>
          </div>
        </div>
        <div className="-mt-4">
          <img src={guardado} alt="" />
        </div>
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {nombre}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {descripcion}
        </p>
      </div>
    </div>
  );
};

export default DesignPost;
