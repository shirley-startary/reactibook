import { 
  TREAR_POSTS, 
  CARGANDO, 
  USER_STATE, 
  CERRAR_SESION, 
  ERROR,CAMBIO_TEXTO_COMENTARIO, 
  CAMBIO_STATUS_COMENTARIO,
  PUBLICAR_COMENTARIO,
  ELIMINAR_COMENTARIO,
  AGREGAR_MENSAJE_EN_INPUT,
  ACTUALIZA_MENSAJE
} from '../types/muroTypes';

const INITIAL_STATE = {
  posts:[],
  cargando: false,
  error: '',
  user: null,
  comment:'',
  commentStatus:'amigos',
  inputedit:'',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TREAR_POSTS:
      return {
        ...state, 
        posts: action.payload, 
        cargando: false,
        error: ''
      };

    case CARGANDO:
      return { ...state, cargando: true} ;

    case ERROR:
      return { ...state, error: action.payload, cargando: false }

    case USER_STATE:
      return { ...state, user: action.payload };
    
    case CERRAR_SESION:
      return { ...state, user: action.payload };
    
    case CAMBIO_TEXTO_COMENTARIO:
      return { ...state, comment: action.payload };

    case CAMBIO_STATUS_COMENTARIO:
      return { ...state, commentStatus: action.payload };
    
    case PUBLICAR_COMENTARIO:
      return {...state, comment: '', cargando: false, error: ''};

    case ELIMINAR_COMENTARIO:
        return {...state, posts: action.payload, cargando: false, error: ''};

    case AGREGAR_MENSAJE_EN_INPUT:
      return {...state, inputedit: action.payload }

    case ACTUALIZA_MENSAJE:
      return {...state, cargando: false, error:'', inputedit:''} 
    default: return state;
  }
}