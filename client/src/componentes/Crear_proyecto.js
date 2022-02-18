import React, { useState } from 'react';
import '../css/Antecedentes_personales.css';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { Button,Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';


export default function Crear_Proyectos() {

    const [getNombreOrg, setNombreOrg] = useState('');
    const [getNombrePr, setNombrePr] = useState('');
    const [getPJ, setPJ] = useState('');
    const [getRepLeg, setRepLeg] = useState('');
    const [getTipo, setTipo] = useState('');




    const sqlHandler = (event) => {

        if (getTipo === 0) {
            console.log('Seleccione Opcion')
        } else {
            axios.post('http://localhost:3001/api/ins/crear_proyecto',
                {
                    NombreOrg:getNombreOrg,
                    NombrePr:getNombrePr,
                    PJ:getPJ,
                    RepLeg:getRepLeg,
                    Tipo:getTipo

                }

            ).then(() => {

                alert('insertado')
            })
        }
    }

    return (

        <div id='form_ant'>

            <h1>Crear Proyecto</h1>

            <form id='formulario'>
            <Stack spacing={3}>
                <TextField id="standard-basic" label="Nombre Organizacion" variant="standard"
                    onChange={(event) => {
                        setNombreOrg(event.target.value)
                    }} />

                <TextField id="standard-basic" label="Nombre Proyecto" variant="standard"
                    onChange={(event) => {
                        setNombrePr(event.target.value)
                    }} />

                <TextField id="standard-basic" label="Personalidad Juridica" variant="standard"
                    onChange={(event) => {
                        setPJ(event.target.value)
                    }} />

                <TextField id="standard-basic" label="Representante Legal" variant="standard"
                    onChange={(event) => {
                        setRepLeg(event.target.value)
                    }} />

                <Box id='datos-box' sx={{ minWidth: 120 }} >
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">Estado civil</InputLabel>
                        <NativeSelect defaultValue={0}

                            onChange={(event) => {

                                setTipo(event.target.value)
                            }}

                            >
                            <option value={0}>Seleccione Opcion</option>
                            <option value={1}>techumbre</option>
                            <option value={2}>banco de material</option>
                            <option value={3}>electrico</option>
                            <option value={4}>renovable</option>



                        </NativeSelect>

                    </FormControl>
                </Box>

            </Stack>
            </form>
            <div id='nxt_button'>
                <NavLink to='' > <Button onClick={sqlHandler} variant="contained">Siguiente</Button></NavLink>

            </div>
        </div>

    );

}