import { Button, IconButton, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div className="App">
      <Typography variant='h3'>LOGIN</Typography>
      <TextField label='Email'></TextField>
      <br></br>
      <TextField label='Password' type={'password'}></TextField>
      <br></br>
      <Button variant='contained' color='primary'>Login</Button>
    </div>
  )
}

export default Login
