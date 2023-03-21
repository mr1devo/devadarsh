import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Validation = () => {
    const [Submitted, setSubmitted] = useState(false);
    var [Inputname, setInputname] = useState({
        fname: ""
    })
    var [Validator, setValidator] = useState({
        fname: ""
    })
    const inputHandler = (e) => {
        const { name, value } = e.target
        setInputname({ ...Inputname, [name]: value })
    }
    const checkValidator = () => {
        let errors = Validator;

        if (!Inputname.fname.trim()) {
            errors.fname = "First name is required";
        } else {
            errors.fname = "";
        }
        setValidator(errors);
    }

    useEffect(() => {
        checkValidator();
    });

    const handleSubmit = (f) => {
        f.preventDefault();
        setSubmitted(true);
    }
    return (
        <div>
            <form id="registrationform"
                onSubmit={handleSubmit}>
                <br></br>
                <TextField label='First Name' variant='outlined' value={Inputname.fname} onChange={inputHandler}>First Name</TextField>
                {(Validator.fname && Submitted) && <p>{Validator.fname}</p>}
                <br></br>
                <br></br>
                <Button variant='contained' type='submit' >Save</Button>
            </form>
        </div>
    )
}

export default Validation
