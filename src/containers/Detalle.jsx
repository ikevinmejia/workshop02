import React, { useEffect, useState } from "react";
import AddComment from "../components/AddComment";
import Comentario from "../components/Comentario";
import DetailsUserPost from "../components/DetailsUserPost";
import ExitDetalle from "../components/ExitDetalle";
import ImgPostDetalle from "../components/ImgPostDetalle";
import NavBar from "../components/NavBar";

function Detalle() {
  const [comentario, setComentario] = useState({});

  const dataStorageUser = JSON.stringify(localStorage.getItem("infoUser"));

  const { postImg } = dataStorageUser;

  return (
    <div className="mb-20 ">
      <ExitDetalle />
      <ImgPostDetalle img={postImg} />
      <DetailsUserPost imgProfile={imgProfile} nameUser={nameUser} />
      <Comentario descripcion={descripcion} estado={comentario} objeto={} setEstado={setComentario} />
      <AddComment />
      <NavBar />
    </div>
  );
}

export default Detalle;
