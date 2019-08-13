import { 
    CAMBIO_NOMBRE_REGISTER,
    CAMBIO_CORREO_REGISTER,
    CAMBIO_CONTRASENA_REGISTER,
    REGISTER,
    CARGANDO,
    ERROR
   } from '../types/registerTypes';

const INITIAL_STATE = {
    nombre_register:'',
    correo_register:'',
    contrasena_register:'',
    cargando: false,
    error: null,
    user:null,
    regresar: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CARGANDO:
            return {...state, cargando: true};
        case CAMBIO_NOMBRE_REGISTER:
            return { ...state, nombre_register: action.payload};
        case CAMBIO_CORREO_REGISTER:
            return { ...state, correo_register: action.payload};
        case CAMBIO_CONTRASENA_REGISTER:
            return { ...state, contrasena_register: action.payload};
        case REGISTER:
            return {
                ...state,
                cargando: false,
                error:action.payload,
                user: action.payload,
                regresar: true,
            }
        case ERROR:
            return {...state, error: action.payload }
        default: return state;
    }
}