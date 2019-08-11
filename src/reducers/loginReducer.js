const INITIAL_STATE = {
    correo_login:'',
    contrasena_login:'',
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
        case 'cambio_correo_login':
            return { ...state, correo_login: action.payload};
        case 'cambio_contrasena_login':
            return { ...state, contrasena_login: action.payload};
        case 'logueado':
            return {
                ...state,
                cargando: false,
                error:'',
                user: action.payload,
                regresar: true,
            }
        default: return state;
    }
}