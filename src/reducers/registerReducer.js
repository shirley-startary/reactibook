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
        case 'cargando':
            return {
                ...state,
                cargando: true
            };
        case 'cambio_nombre_register':
            return { ...state, nombre_register: action.payload};
        case 'cambio_correo_register':
            return { ...state, correo_register: action.payload};
        case 'cambio_contrasena_register':
            return { ...state, contrasena_register: action.payload};
        case 'register':
            return {
                ...state,
                cargando: false,
                error:action.payload,
                user: action.payload,
                regresar: true,
            }
        default: return state;
    }
}