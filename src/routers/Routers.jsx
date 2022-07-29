import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import Profile from '../containers/Profile'

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
            </Routes>
        </>
    )
}

export default Routers