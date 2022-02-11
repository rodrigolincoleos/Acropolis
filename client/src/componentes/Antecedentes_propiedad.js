import React, { useState, useEffect } from 'react';
import '../css/Antecedentes_personales.css';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { obtenerRegionesAccion, obtenerProvinciasAccion, obtenerComunasAccion,obtenerIdPers } from '../redux/dropDucks'
import axios from 'axios';

function Antecedentes_propiedad() {

    const [getRegId, setRegId] = useState('');
    const [getProvId, setProvId] = useState('');
    const [getComId, setComId] = useState('');
    const [getCalle, setCalle] = useState('');
    const [getNum, setNum] = useState('');
    const [getDpto, setDpto] = useState('');
    const [getVilla, setVilla] = useState('');
    
    const dispatch = useDispatch();
    
    const drops = useSelector(store => store.drops.array)
   
    const sqlHandler = () => {

       
        axios.post('http://localhost:3001/api/ins/direccion',

        {
            region: getRegId,
            provincia: getProvId,
            comuna: getComId,
            calle: getCalle,
            numeracion: getNum,
            dpto: getDpto,
            villa: getVilla
        }

    ).then(() => {

        alert('insertado')
    })
    }

    return (

        <div id='body'>

            <form id='formulario'>

                <h1>Antecedentes Propiedad {} </h1>

                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Region
                        </InputLabel>
                        <NativeSelect
                            onClick={() => dispatch(obtenerRegionesAccion())}
                            onChange={(event) => {
                                try {
                                    setRegId(event.target.value);
                                } catch (error) {
                                    console.log(error)
                                }
                            }} >
                            {drops.map((val, key) => {

                                return (
                                    <option id={val.key} value={val.id}>{val.region}</option>
                                )

                            })}

                        </NativeSelect>
                    </FormControl>
                </Box>

                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Provincia
                        </InputLabel>
                        <NativeSelect
                            onClick={() => dispatch(obtenerProvinciasAccion())}

                            onChange={(event) => {
                                try {
                                    setProvId(event.target.value);
                                } catch (error) {
                                    console.log(error)
                                }

                            }}>
                            {
                                drops.map((val, key) => {

                                    if (val.region_id == getRegId) {
                                        return (
                                            <option id={val.key} value={val.id}>{val.provincia}</option>
                                        )
                                    }
                                })
                            }
                        </NativeSelect>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Comuna
                        </InputLabel>
                        <NativeSelect

                            onClick={() => dispatch(obtenerComunasAccion())}
                            onChange={(event) => {
                                try {
                                    setComId(event.target.value);
                                } catch (error) {
                                    console.log(error)
                                }

                            }}

                        >
                            {
                                drops.map((val, key) => {

                                    if (val.provincia_id == getProvId) {
                                        return (
                                            <option id={val.key} value={val.id}>{val.comuna}</option>
                                        )
                                    }
                                })}

                        </NativeSelect>
                    </FormControl>
                </Box>


                <TextField id="standard-basic" label="Calle o AV" variant="standard"
                    onChange={(event) => {
                        setCalle(event.target.value)
                    }} />
                <TextField id="standard-basic" label="Numeracion" variant="standard"
                    onChange={(event) => {
                        setNum(event.target.value)
                    }} />
                <TextField id="standard-basic" label="Dpto/Casa" variant="standard"
                    onChange={(event) => {
                        setDpto(event.target.value)
                    }} />
                <TextField id="standard-basic" label="Villa/Poblacion" variant="standard"
                    onChange={(event) => {
                        setVilla(event.target.value)
                    }} />
                <NavLink to='/antecedentes_ahorro'>
                    <Button variant="contained" onClick={sqlHandler}> Siguiente</Button>
                </NavLink>
            </form>
        </div>
    );
}
export default Antecedentes_propiedad;