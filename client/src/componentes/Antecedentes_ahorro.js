import React, { useState, useEffect } from 'react';
import '../css/antecedentes_ahorro.css';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

import axios from 'axios';

function Antecedentes_Ahorro() {

    const [getCta,setCta]=useState('')
    const [getahorro,setahorro]=useState('')
    const [getSubs,setSubs]=useState('')

    const sqlHandler = () => {

        axios.post('http://localhost:3001/api/insert/ahorro',

        {
            cta:getCta,
            ahorro:getahorro,
            subs:getSubs       
        }

    ).then(() => {

        alert('insertado')
    })
    }

   
    return (

       
             <form id='formulario-ahorro'>
            <h1>Ahorros</h1>
           
                <TextField id="standard-basic" label="Nro Cta" variant="standard" onChange={(event) => {
                        setCta(event.target.value)
                    }}/>
                <TextField id="standard-basic" label="Ahorro" variant="standard" onChange={(event) => {
                        setahorro(event.target.value)
                    }}/>
                <Box id='datos-box' sx={{ minWidth: 120 }} >
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">Subsidio</InputLabel>
                        <NativeSelect
                        onChange={(event) => {
                            try {
                                setSubs(event.target.value);
                            } catch (error) {
                                console.log(error)
                            }
                        }}>
                            <option value={0}>seleccionar</option>
                            <option value={1}>1 UF</option>
                            <option value={2}>1.5 UF</option>
                        </NativeSelect>
                        <NavLink to='/'>
                    <Button variant="contained" onClick={sqlHandler}> Siguiente</Button>
                </NavLink>
                    </FormControl>
                </Box>

            </form>
   
    );
}
export default Antecedentes_Ahorro;