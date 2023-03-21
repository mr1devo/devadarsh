import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const State = () => {
    var [fname, setfname] = useState("Tiya")
    const Changename = () => {
        setfname('thakkudu')
    }
    return (
        <div>
            <Typography>Welcome {fname}</Typography>
            <Button variant='contained' onClick={Changename}>Change</Button>
            <br></br>
        </div>
    )
}

export default State
