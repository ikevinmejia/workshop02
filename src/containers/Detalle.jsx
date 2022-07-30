import React, { useContext } from "react";
import AddComment from "../components/AddComment";
import Comentario from "../components/Comentario";
import DetailsUserPost from "../components/DetailsUserPost";
import ExitDetalle from "../components/ExitDetalle";
import ImgPostDetalle from "../components/ImgPostDetalle";
import NavBar from "../components/NavBar";
import { Contexto } from "../context/Context";

function Detalle() {
  const { dataUser } = useContext(Contexto);

  const dataStorageUser = JSON.parse(localStorage.getItem("infoPost"));

  const { name, img, description } = dataStorageUser;

  return (
    <div className="mb-20 ">
      <ExitDetalle />
      <ImgPostDetalle img={img} />
      <DetailsUserPost imgProfile={dataUser.imgProfile} nameUser={name} />
      <Comentario descripcion={description} />
      <AddComment />
      <NavBar />
    </div>
  );
}

export default Detalle;
