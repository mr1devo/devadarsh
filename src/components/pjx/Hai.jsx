import { TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const Hai = () => {
    var [name,setname]=useState("")
    const ChangeName = (event)=>{
        const{ name, value}= event.target;
        setname(value);
    }
        useEffect(()=>{
            setname("[Enter Name]")
        },[])
        var [names,setnames]=useState("")
        const Change = (event)=>{
            const{ name, value}= event.target;
            setnames(value);
        }
            useEffect(()=>{
                setnames("[Enter Name]")
            },[])
  return (
    <div>
        <Typography variant='h3'>My name is {name}</Typography><br></br>
        <TextField label='Enter Name' onChange={(e) => ChangeName(e)}></TextField>
        <Typography variant='h3'>My Friends call me {names}</Typography><br></br>
        <TextField label='Enter Name' onChange={(e) => Change(e)}></TextField>
    </div>
  )
}

export default Hai
