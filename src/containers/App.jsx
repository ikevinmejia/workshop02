import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "../context/Context";
import Routers from "../routers/Routers";

function App() {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Routers />
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
