import React from 'react';
import Axios from 'axios';

function app(){

    useEffect(() => {
      Axios.get('http://localhost:3000/1').then(response =>{

          return console.log(response);
      });
  }, []);


}