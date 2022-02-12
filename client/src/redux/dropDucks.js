import axios from "axios"

// constantes
const dataInicial = {
    array: []
}

// type
const OBTENER_REGIONES_EXITO = 'OBTENER_REGIONES_EXITO'
const OBTENER_PROVINCIAS_EXITO = 'OBTENER_PROVINCIAS_EXITO'
const OBTENER_COMUNAS_EXITO = 'OBTENER_COMUNAS_EXITO'
const BUSCAR_PERS_EXITO = 'BUSCAR_PERS_EXITO'


// reducer

export default function dropReducer(state = dataInicial, action) {

    switch (action.type) {
        case OBTENER_REGIONES_EXITO:
            return { ...state, array: action.payload }
        case OBTENER_PROVINCIAS_EXITO:
            return { ...state, array: action.payload }
        case OBTENER_COMUNAS_EXITO:
            return { ...state, array: action.payload }
        case BUSCAR_PERS_EXITO:
            return { ...state, array: action.payload }
        default:
            return state
    }
}



//acciones
export const obtenerRegionesAccion = () => async (dispatch) => {
    if (localStorage.getItem('regiones')) {
        dispatch({
            type: OBTENER_REGIONES_EXITO,
            payload: JSON.parse(localStorage.getItem('regiones'))
        })
        return
    }


    try {
        await axios.get('http://localhost:3001/api/req/regiones').then((response) => {

            dispatch({
                type: OBTENER_REGIONES_EXITO,
                payload: response.data
            })
            localStorage.setItem('regiones', JSON.stringify(response.data))
        });
    } catch (error) {
        console.log(error)
    }
}

export const obtenerProvinciasAccion = () => async (dispatch, getState) => {
    if (localStorage.getItem('provincias')) {
        dispatch({
            type: OBTENER_REGIONES_EXITO,
            payload: JSON.parse(localStorage.getItem('provincias'))
        })
        return
    }

    try {
        await axios.get('http://localhost:3001/api/req/provincias').then((response) => {

            dispatch({
                type: OBTENER_PROVINCIAS_EXITO,
                payload: response.data
            })
            localStorage.setItem('provincias', JSON.stringify(response.data))

        });
    } catch (error) {
        console.log(error)
    }
}

export const obtenerComunasAccion = () => async (dispatch, getState) => {
    if (localStorage.getItem('comunas')) {
        dispatch({
            type: OBTENER_REGIONES_EXITO,
            payload: JSON.parse(localStorage.getItem('comunas'))
        })
        return
    }

    try {
        await axios.get('http://localhost:3001/api/req/comunas').then((response) => {

            dispatch({
                type: OBTENER_COMUNAS_EXITO,
                payload: response.data
            })
            localStorage.setItem('comunas', JSON.stringify(response.data))

        });
    } catch (error) {
        console.log(error)
    }
}

export const buscarPersAccion = () => async (dispatch, getState) => {
   
    try {
        await axios.get('http://localhost:3001/api/req/searchpers').then((response) => {

            dispatch({
                type: BUSCAR_PERS_EXITO,
                payload: response.data
            })
            

        });
    } catch (error) {
        console.log(error)
    }
}