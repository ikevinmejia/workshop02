import React, { createContext } from 'react'

const Contexto = createContext()


function ContextProvider() {

  // Aquí se crea lo que se necesite del contexto

  const data = {

  }


  return (
    <Contexto.Provider value={data}>{children}</Contexto.Provider>
  )
}

export {
  ContextProvider,
  Contexto
}