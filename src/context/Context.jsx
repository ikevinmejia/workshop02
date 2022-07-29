import React, { createContext, useState } from 'react'

const Contexto = createContext()


function ContextProvider({ children }) {

  // Aquí se crea lo que se necesite del contexto

  const [showModal, setShowModal] = useState(false)

  const data = {
    showModal,
    setShowModal,
  };


  return (
    <Contexto.Provider value={data}>{children}</Contexto.Provider>
  )
}

export {
  ContextProvider,
  Contexto
}