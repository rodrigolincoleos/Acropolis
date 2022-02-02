import React from 'react';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { ImSearch } from "react-icons/im";
function Buscador() {


    return (

        <div>
        <FormControl id="search">
        <InputLabel >Buscar</InputLabel>
        <OutlinedInput
            startAdornment={<InputAdornment position="start"><ImSearch /></InputAdornment>}
            label="Search"
        />
    </FormControl>
    </div>
    );
}

export default Buscador;