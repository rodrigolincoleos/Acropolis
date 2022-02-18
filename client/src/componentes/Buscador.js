import React, { useState } from 'react';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { ImSearch } from "react-icons/im";
import { buscarPersAccion } from '../redux/dropDucks'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'


function Buscador() {
    let search = ('')
    const dispatch = useDispatch();
    const drops = useSelector(store => store.drops.array)

    const sqlHandeler = (event) => {dispatch(buscarPersAccion())

        
            let e = event.target.value
            search = e

            axios.post('http://localhost:3001/api/ins/searchpers',

                {
                    ir: e
                }

            ).then(() => {
            })


            /*drops.map((val) => {
                console.log('desde el maps ' + val)

            }
            )*/
        }

        return (

            <div>
                <FormControl id="search">
                    <InputLabel >Buscar</InputLabel>
                    <OutlinedInput
                        startAdornment={<InputAdornment position="start"><ImSearch /></InputAdornment>}
                        label="Search"
                        onChange={sqlHandeler}
                    />
                </FormControl>
            </div>
        );
    }
export default Buscador;