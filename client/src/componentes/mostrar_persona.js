import React from "react";
import '../css/mostrar_persona.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { IoIosAddCircleOutline } from "react-icons/io";
import { ImSearch } from "react-icons/im";
import { MdOutlineEditNote, MdDelete } from "react-icons/md";


export default function Mostrar_Persona() {

    return (
        <div id='mostrar_persona'>

            <FormControl id="search">
                <InputLabel >Buscar</InputLabel>
                <OutlinedInput
                    startAdornment={<InputAdornment position="start"><ImSearch /></InputAdornment>}
                    label="Search"
                />
            </FormControl>

            <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3HMcXMq2gtNWrWcF2b6vhrb3ownaU7QKrVwGC3nT6QoTkWSdJFclbkjgiaT_E3RALfEM&usqp=CAU" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Nombre Apellido"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Direccion:
                                </Typography>
                                {"Calle #2525, Comuna, Region "}
                                <br />
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Telefono:
                                </Typography>

                                {" +56 9 xxxx xxxx"}
                            </React.Fragment>
                        }


                    />

                    <IconButton aria-label="add" size="large" color="primary" >
                        <IoIosAddCircleOutline />
                    </IconButton>

                    <IconButton aria-label="edit" size="large" color="primary" >
                        <MdOutlineEditNote />
                    </IconButton>

                    <IconButton aria-label="delete" size="large" color="primary" >
                        <MdDelete />
                    </IconButton>

                </ListItem>

            </List>
        </div>
    );
}