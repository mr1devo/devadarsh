import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <Typography variant='h3'>Signup</Typography><br></br>
      <TextField label='Firstname'></TextField><br></br>
      <TextField label='Lastname'></TextField><br></br>
      <TextField label='Email'></TextField><br></br>
      <TextField label='Password' type={'password'}></TextField><br></br>
        <Button variant='contained'color='primary'>Signup</Button>

    </div>
  )
}

export default Signup
