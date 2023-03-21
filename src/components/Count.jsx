import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'

const Count = () => {
    var[cnt,setcnt]=useState(0);
    const increment=()=> {
        setcnt(++cnt);
    }
    const decrement =()=> {
        setcnt(cnt-1);
    }
  return (
    <div>
      <Typography variant='h2'>{cnt}</Typography><br></br>
      <Button variant='contained' onClick={decrement}>-</Button><br></br><br></br>
      <Button variant='contained' onClick={increment}>+</Button><br></br>
    </div>
  )
}

export default Count
