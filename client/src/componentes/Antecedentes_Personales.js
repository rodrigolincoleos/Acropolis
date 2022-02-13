import React, { useState } from 'react';
import '../css/Antecedentes_personales.css';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import * as axios from 'axios';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';



export default function Antecedentes_Personales() {

    
    const [Nombre1, setNombre1] = useState('');
    const [Nombre2, setNombre2] = useState('');
    const [Apellido1, setApellido1] = useState('');
    const [Apellido2, setApellido2] = useState('');
    const [Rut, setRut] = useState('');
    const [dv, setDv] = useState('');
    const [Mail, setMail] = useState('');
    const [Telefono, setTelefono] = useState('');
    const [Nacimiento, setNacimiento] = useState('');
    const [RSH, setRSH] = useState('');
    const [es, setEs] = useState('');
    const [getLink, setLink] = useState('')

    const handleChange = (event) => {

        if (event.target.value == 2 || event.target.value == 5) {
            setLink('/antecedentes_conyuge')
        }else{
            setLink('/antecedentes_propiedad')
        }
        setEs(event.target.value)
    };

    /*useEffect(() => {

        axios.get('http://localhost:3001/api/req').then((response) => {

            setGetid(response.data);

        });
      
    });*/

    const sqlHandler = (event) => {


        axios.post('http://localhost:3001/api/insertpers',
            {

                nombre_1: Nombre1,
                nombre_2: Nombre2,
                apellido_1: Apellido1,
                apellido_2: Apellido2,
                rut: Rut,
                dv: dv,
                telefono:Telefono,
                mail:Mail,
                nac:Nacimiento,
                rsh:RSH,
                es:es

            }

        ).then(() => {

            alert('insertado')
        })
    }
   
    return (

        <div id='form_ant'>

            <h1>Antecedentes Persona</h1>

            <form id='formulario'>
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

                <TextField id="standard-basic" label="Fecha Nacimiento" variant="standard"
                    onChange={(event) => {
                        setNacimiento(event.target.value)

                    }} />
                <TextField id="standard-basic" label="Reg. Soc. Hogares" variant="standard" onChange={(event) => {
                    setRSH(event.target.value)

                }} />

                <Box id='datos-box' sx={{ minWidth: 120 }} >
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">Estado civil</InputLabel>
                        <NativeSelect

                            onChange={handleChange}
                            defaultValue={0}
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                            }}>
                            <option value={0}>Seleccione Opcion</option>
                            <option value={1}>Soltero(a)</option>
                            <option value={2}>Casado(a)</option>
                            <option value={3}>Divorciado(a)</option>
                            <option value={4}>Viudo(a)</option>
                            <option value={5}>AUC</option>

                         

                        </NativeSelect>

                    </FormControl>
                </Box>
       

            </form>
            <div id='nxt_button'>
                <NavLink to={getLink} > <Button onClick={sqlHandler} variant="contained">Siguiente</Button></NavLink>

            </div>
        </div>

    );

}