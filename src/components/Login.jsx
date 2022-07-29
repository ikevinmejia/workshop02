import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from '../images/logo.png'
import { ColorButton } from '../styled/StyledComponents';
import { getData } from '../helpers/CRUD';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const [data, setData] = useState(null)
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const url = "https://data-sprint-02.herokuapp.com/usuarios"
    let navigate = useNavigate();
    useEffect(() => {
        getData(setData, url)
    }, [data])

    const handleSubmit = (e) => {
        e.preventDefault();
        for (let i = 0; i < data.length; i++) {

            if (user == data[i].user && password == data[i].password) {
                localStorage.setItem('indice', i)
                localStorage.setItem('id', data[i].id)
                alert('se ha iniciado')
                navigate('/home')
                break;
            } else {
                alert('error de usuario o contraseña')
            }

        }

        setUser('')
        setPassword('')
    }

    return (
        <div className='container'>
            <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col items-center justify-center gap-4'>
                <h1 className='mt-32 text-3xl font-medium text-center' style={{ color: "#FF7674" }}>Login</h1>
                <div className='flex items-center justify-center'>
                    <img src={logo} alt="" className='mt-3 mb-10 ml-20' />
                </div>

                <TextField id="outlined-basic" label="User" variant="outlined" className='w-72' value={user} onChange={(e) => setUser(e.target.value)} />
                <TextField className=' w-72' value={password} onChange={(e) => setPassword(e.target.value)}
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <ColorButton variant="contained" type='submit' >Login</ColorButton>
                <Link to="/register"><Button variant="contained">Register</Button></Link>
            </form>


        </div>
    )
}

export default Login