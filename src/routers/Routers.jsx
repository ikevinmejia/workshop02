import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Detalle from "../containers/Detalle";
import Profile from "../containers/Profile";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/detalle" element={<Detalle />}></Route>
      </Routes>
    </>
  );
};

export default Routers;
