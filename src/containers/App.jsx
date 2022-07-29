import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";

function App() {
  return (
    <>
      <BrowserRouter><Home /></BrowserRouter>

    </>
  );
}

export default App;
