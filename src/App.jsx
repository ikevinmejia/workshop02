import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Detalle from "./containers/Detalle";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<NavBar />} /> */}
          <Route path="/detalle" element={<Detalle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
