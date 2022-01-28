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
    
    const [getid, setGetid] = useState(``);

    useEffect(() => {

        axios.get('http://localhost:3001/api/req/regiones').then((response) => {

            setGetid(response.data);

            console.log(getid);

        });
        

    });

    return (
   
    <body id='body'>

    <form id='formulario'>

        <h1>Antecedentes Propiedad {getid.value}</h1>

                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Region
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
                            <option value={0}>Seleccione Region</option>
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
                <NavLink to='https://github.com/rodrigolincoleos/Acropolis/antecedentes_ahorro'><Button variant="contained">Siguiente</Button></NavLink>                
            </form>
        </body>
    );
}
export default Antecedentes_propiedad;