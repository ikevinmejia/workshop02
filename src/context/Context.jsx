import React, { createContext, useState } from "react";

const Contexto = createContext();

function ContextProvider({ children }) {
  // Aquí se crea lo que se necesite del contexto
  const [comentario, setComentario] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [dataPost, setDataPost] = useState({});
  const [dataUser, setDataUser] = useState({});
  const data = {
    showModal,
    setShowModal,
    dataPost,
    setDataPost,
    dataUser,
    setDataUser,
    comentario,
    setComentario,
  };

  return <Contexto.Provider value={data}>{children}</Contexto.Provider>;
}

export { ContextProvider, Contexto };
