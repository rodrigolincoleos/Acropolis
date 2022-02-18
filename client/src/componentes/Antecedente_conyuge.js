import React, { useState } from 'react';
import '../css/antecedentes_conyuge.css';
import TextField from '@mui/material/TextField';
import * as axios from 'axios';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';



export default function Antecedentes_conyuge() {

    
    const [Nombre1, setNombre1] = useState('');
    const [Nombre2, setNombre2] = useState('');
    const [Apellido1, setApellido1] = useState('');
    const [Apellido2, setApellido2] = useState('');
    const [Rut, setRut] = useState('');
    const [dv, setDv] = useState('');
    const [Mail, setMail] = useState('');
    const [Telefono, setTelefono] = useState('');
    const [value, setValue] = useState(new Date());

   

    const sqlHandler = (event) => {


        axios.post('http://localhost:3001/api/ins/conyuge',
            {

                nombre_1: Nombre1,
                nombre_2: Nombre2,
                apellido_1: Apellido1,
                apellido_2: Apellido2,
                rut: Rut,
                dv: dv,
                telefono:Telefono,
                mail:Mail,
                nac:value,

            }

        ).then(() => {

            alert('insertado')
        })
    }
   
    return (

        <div id='form_ant'>

            <h1>Antecedentes Conyuge</h1>

            <form id='formulario'>
            <Stack spacing={3}>

                <TextField id="standard-basic" label="Nombres" variant="standard"
                    onChange={(event) => {
                        let splited = event.target.value.split(' ');
                        console.log(splited)
                        setNombre1(splited[0])
                        setNombre2(splited[1])

                    }} />

                <TextField id="standard-basic" label="Apellidos" variant="standard"
                    onChange={(event) => {
                        let splited = event.target.value.split(' ');
                        console.log(splited)
                        setApellido1(splited[0])
                        setApellido2(splited[1])
                    }} />

                <TextField id="standard-basic" label="Rut" variant="standard"
                    onChange={(event) => {
                        let splited = event.target.value.split('-');
                        console.log(splited)
                        setRut(splited[0])
                        setDv(splited[1])
                    }} />

                <TextField id="standard-basic" label="Mail" variant="standard" onChange={(event) => {
                    setMail(event.target.value)
                }} />

                <TextField id="standard-basic" label="Telefono" variant="standard" onChange={(event) => {
                    setTelefono(event.target.value)
                }} />
                <LocalizationProvider id='datepicker' dateAdapter={AdapterDateFns}>
                   
                <DesktopDatePicker
                            disableFuture
                            label="Fecha Nacimiento"
                            openTo="year"
                            views={['day', 'month', 'year']}
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue.toString().slice(4,-44));
                                console.log(value)
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />

                  
                </LocalizationProvider>
                </Stack>
            </form>
            <div id='nxt_button'>
                <NavLink to='/antecedentes_propiedad' > <Button onClick={sqlHandler} variant="contained">Siguiente</Button></NavLink>

            </div>
        </div>

    );

}