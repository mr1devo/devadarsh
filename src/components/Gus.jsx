import { Input, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const Gus = () => {
    var [Inputname,setInputname]=useState({
        fname:"",
        lname:""
    })
    const inputHandler = (e)=>{
        const{ name, value}= e.target
        setInputname({...Inputname, [name]: value})
    }
  return (
    <div>
        <Typography>Firstname is {Inputname.fname}</Typography><br></br>
        <TextField label='First Name' variant='outlined'
        name='fname' value={Inputname.fname} onChange={inputHandler}></TextField>
        <Typography >First Name is {Inputname.lname}</Typography><br></br>
        <TextField label='Second Name' name='lname' value={Inputname.lname} onChange={inputHandler}></TextField>
    </div>
  )
}

export default Gus
