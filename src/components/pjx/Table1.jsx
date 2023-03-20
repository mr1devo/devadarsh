import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Table1 = () => {
    var pname = [{ name: "Smrithi", age: 19, place: "Kodaly" },
    { name: "Devadarsh", age: 19, place: "Kodaly" },
    { name: "Kairali", age: 40, place: "Edamuttam" }]
    return (

        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Place</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pname.map((value, index) => {
                        return <TableRow>
                            <TableCell key={index}>{value.name}</TableCell>
                            <TableCell key={index}>{value.age}</TableCell>
                            <TableCell key={index}>{value.place}</TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default Table1
