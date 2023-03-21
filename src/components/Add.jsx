import { TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Add = () => {
    var [name,setname]=useState("")
    const ChangeName = (event)=>{
        const{ name, value}= event.target;
        setname(value);
    }
        useEffect(()=>{
            setname("[Enter Name]")
        },[])
  return (
    <div>
        <Typography variant='h3'>My name is {name}</Typography><br></br>
        <TextField label='Enter Name' onChange={(e) => ChangeName(e)}></TextField>
    </div>
  )
}

export default Add
