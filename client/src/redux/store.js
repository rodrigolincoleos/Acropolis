import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import dropReducer from './dropDucks'
import antPropReducer from './antPropDucks'
import {composeWithDevTools} from 'redux-devtools-extension'


const rootReducer = combineReducers({
drops:dropReducer,
antProp:antPropReducer
})

const composrEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function generateStore(){
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk)));
    
    return store
}