import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Ns = () => {
    var [page,setpage]=useState("")
    const homeName = ()=>{
        setpage("Home page")
    }
    const galaryname = ()=>{
        setpage("Galary page")
    }
    const contactname = ()=>{
        setpage("Contact page")
    }
  return (
    <div>
     <Button variant='contained' color='primary' onClick={homeName} >Home</Button> 
     <Button variant='contained' color='success' onClick={galaryname} >Galary page</Button> 
     <Button variant='contained' color='error' onClick={contactname} >Contact page</Button> 
     <Typography>Welcome to {page}</Typography>
    </div>
  )
}

export default Ns
