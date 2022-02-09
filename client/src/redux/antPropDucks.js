import axios from "axios"

// constantes
const ant_prop = {
    array: []
}

// type
const ENVIAR_INFO_EXITO = 'ENVIAR_INFO_EXITO'


// reducer

export default function antPropReducer(state = ant_prop,action) {

    switch (action.type) {
        case ENVIAR_INFO_EXITO:
            return {...state, array: action.payload}
        default:
            return state
    }
}



//acciones

export const enviarInfoPropiedadAccion = () => async (dispatch,getState) => {

    console.log('getState',getState().ant_proparray)

    try {
         await axios.post('http://localhost:3001/api/antpropiedad').then((response) => {

            dispatch({
                type: ENVIAR_INFO_EXITO,
                payload: response.data
                
            })
            console.log('desde  dispatch '+ response.data)
        });
    } catch (error) {
        console.log(error)
    }
}