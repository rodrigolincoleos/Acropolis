import React, { useState, useEffect } from 'react';
import '../css/Antecedentes_personales.css';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Box from '@mui/material/Box';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

function Antecedentes_propiedad() {

    const [getRegiones, setRegiones] = useState(``);
    const [getProvincia, setProvincia] = useState(``);
    const [getComuna, setComuna] = useState(``);
    const [getRegid, setRegid] = useState(``);

    useEffect(() => {

        axios.get('http://localhost:3001/api/req/regiones').then((response) => {

            setRegiones(response.data);
            console.log(getRegiones);

        });


    },[]);

    return (

        <body id='body'>

            <form id='formulario'>

                <h1>Antecedentes Propiedad  </h1>

                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Region
                        </InputLabel>
                        <NativeSelect >
                            {getRegiones.map((val, key) => {

                                return (
                                    <option value={val.key}>{val.region}</option>
                                )
                            })}

                        </NativeSelect>
                    </FormControl>
                </Box>

                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Comuna
                        </InputLabel>
                        <NativeSelect
                            defaultValue={0}
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                            }}>
                            <option value={10}>1</option>
                            <option value={20}>2</option>
                            <option value={30}>3</option>
                            <option value={0}>Seleccione Comuna</option>
                        </NativeSelect>
                    </FormControl>
                </Box>

                <TextField id="standard-basic" label="Calle o AV" variant="standard" />
                <TextField id="standard-basic" label="Numeracion" variant="standard" />
                <TextField id="standard-basic" label="Dpto/Casa" variant="standard" />
                <TextField id="standard-basic" label="Villa/Poblacion" variant="standard" />
                <NavLink to='/antecedentes_ahorro'><Button variant="contained">Siguiente</Button></NavLink>
            </form>
        </body>
    );
}
export default Antecedentes_propiedad;