import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        </IconButton>
        <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1 }}>FACEBOOK
        <Button color="inherit"><Link to={'/'} style={{color:'white'}}>Home</Link></Button>
        </Typography>
        <Button color="inherit"><Link to={'/Login'} style={{color:'white'}}>Login</Link></Button>
        <Button color="inherit"><Link to={'/Signup'} style={{color:'white'}}>Signup</Link></Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar
