import React, { useState, useEffect } from 'react';
import '../css/antecedentes_ahorro.css';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Box from '@mui/material/Box';

import axios from 'axios';

function Antecedentes_Ahorro() {
   
    return (

       
             <form id='formulario-ahorro'>
            <h1>Ahorros</h1>
           
                <TextField id="standard-basic" label="Nro Cta" variant="standard" />
                <TextField id="standard-basic" label="Ahorro" variant="standard" />
                <Box id='datos-box' sx={{ minWidth: 120 }} >
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">Subsidio</InputLabel>
                        <NativeSelect>
                            <option value={0}>1 UF</option>
                            <option value={1}>1.5 UF</option>
                        </NativeSelect>

                    </FormControl>
                </Box>

            </form>
   
    );
}
export default Antecedentes_Ahorro;