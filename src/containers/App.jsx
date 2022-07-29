import React from "react";
import { BrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";

function App() {
  return (
    <>
      <BrowserRouter><Login /></BrowserRouter>

    </>
  );
}

export default App;
