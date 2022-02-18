import React, { useState, useEffect } from 'react';
import '../css/Body.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import '../css/Side_menu.css';
import { NavLink } from 'react-router-dom';

function Side_menu() {




  return (




    <List id='side_menu' component="nav" aria-label="mailbox folders">

      <NavLink id="sm_link" to='/antecedentes_persona'>
        <ListItem button>
          <ListItemText primary="Crear Persona" />
        </ListItem>
      </NavLink>

      <Divider />

      <NavLink id="sm_link" to='/crear_proyecto'>
        <ListItem button>
          <ListItemText primary="Crear Proyecto" />
        </ListItem>
      </NavLink>

      <Divider />

      <NavLink id="sm_link" to='/mostrar_persona'>
        <ListItem button>
          <ListItemText primary="Personas" />
        </ListItem>
      </NavLink>

      <Divider light />

      <ListItem button>
        <ListItemText id="sm_link" primary="Proyectos" />
      </ListItem>
    </List>
  );
}

export default Side_menu;