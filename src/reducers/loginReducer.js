import { 
    CAMBIO_CORREO_LOGIN, 
    CAMBIO_CONTRASENA_LOGIN ,
    LOGUEADO,
    USER_STATE,
    CARGANDO,
    ERROR
} from '../types/loginTypes';


const INITIAL_STATE = {
    correo_login:'',
    contrasena_login:'',
    cargando: false,
    error: '',
    user: null,
    regresar: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CARGANDO:
            return {
                ...state,
                cargando: true
            };
        case CAMBIO_CORREO_LOGIN:
            return { ...state, correo_login: action.payload};
        case CAMBIO_CONTRASENA_LOGIN:
            return { ...state, contrasena_login: action.payload};
        case LOGUEADO:
            return {
                ...state,
                cargando: false,
                error:'',
                user: action.payload,
                regresar: true,
            };
        case USER_STATE:
            return {
                ...state,
                cargando: false,
                error:'',
                user: action.payload
            };

        case ERROR:
            return { ...state, error: action.payload, cargando:false}
        default: return state;
    }
}