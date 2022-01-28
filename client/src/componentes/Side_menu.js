import React, { useState, useEffect } from 'react';
import '../css/Body.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import '../css/Body.css';
import { NavLink } from 'react-router-dom';

function Side_menu() {




  return (


    <List id='side_menu' component="nav" aria-label="mailbox folders">

      <NavLink to='/Acropolis.git/Antecedentes_persona'>
        <ListItem button>
          <ListItemText primary="crear persona" />
        </ListItem>
      </NavLink>

      <Divider />

      <ListItem button divider>
        <ListItemText primary="Crear proyectos" />
      </ListItem>

      <NavLink to='/Acropolis.git/mostrar_persona'>
        <ListItem button>
          <ListItemText primary="Personas" />
        </ListItem>
      </NavLink>

      <Divider light />

      <ListItem button>
        <ListItemText primary="Proyectos" />
      </ListItem>
    </List>


  );
}

export default Side_menu;