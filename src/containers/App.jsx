import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import { ContextProvider } from "../context/Context";

function App() {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Home />
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
