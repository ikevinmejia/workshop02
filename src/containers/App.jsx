import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Routers from "../routers/Routers";

function App() {
  return (
    <>
      <BrowserRouter><Routers /></BrowserRouter>

    </>
  );
}

export default App;
