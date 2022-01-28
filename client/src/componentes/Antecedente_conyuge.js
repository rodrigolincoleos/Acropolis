import React, { useState, useEffect } from 'react';
import '../css/antecedentes_conyuge.css';
import TextField from '@mui/material/TextField';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';

export default function Antecedentes_Conyuge() {

    const [Nombre1, setNombre1] = useState('');
    const [Nombre2, setNombre2] = useState('');
    const [Apellido1, setApellido1] = useState('');
    const [Apellido2, setApellido2] = useState('');
    const [Rut, setRut] = useState('');
    const [dv, setDv] = useState('');


    const sqlHandler = (event) => {


        axios.post('http://localhost:3001/api/insertpers',
            {

                nombre_1: Nombre1,
                nombre_2: Nombre2,
                apellido_1: Apellido1,
                apellido_2: Apellido2,
                rut: Rut,
                dv: dv
            }

        ).then(() => {

            alert('insertado')
        })
    }

   
    return (

       <div>
             <form id='formulario-conyuge'>
            <h1>Antecedentes Conyuge {/*antpersona.Nombre_1*/}</h1>
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

                <TextField id="standard-basic" label="Mail" variant="standard" />
                <TextField id="standard-basic" label="Telefono" variant="standard" />
                <TextField id="standard-basic" label="Fecha Nacimiento" variant="standard" />
                <TextField id="standard-basic" label="Reg. Soc. Hogares" variant="standard" />

            </form>

<div id='nxt_button'>
<NavLink to='https://github.com/rodrigolincoleos/Acropolis/antecedentes_propiedad' > <Button onClick={sqlHandler} variant="contained">Siguiente</Button></NavLink>

</div>
   </div>
    );
}
