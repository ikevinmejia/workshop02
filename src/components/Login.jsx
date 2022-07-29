import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from '../images/logo.png'

const Login = () => {
    return (
        <div className='container'>
            <form action="" className='flex flex-col items-center justify-center gap-4'>
                <h1 className='mt-32 text-3xl font-medium text-center' style={{ color: "#FF7674" }}>Login</h1>
                <div className='flex items-center justify-center'>
                    <img src={logo} alt="" className='mt-3 mb-10 ml-20' />
                </div>

                <TextField id="outlined-basic" label="Usuario" variant="outlined" className='w-72' />
                <TextField className=' w-72'
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />

                <ColorButton variant="contained">Custom CSS</ColorButton>
            </form>


        </div>
    )
}

export default Login