import { TREAR_POSTS, CARGANDO, USER_STATE, CERRAR_SESION, ERROR } from '../types/muroTypes';

const INITIAL_STATE = {
  posts:[],
  cargando: false,
  error: false,
  user: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TREAR_POSTS:
      return {
        ...state, 
        posts: action.payload, 
        cargando: false
      };

    case CARGANDO:
      return { ...state, cargando: true};

    case ERROR:
        return { ...state, error: action.payload, cargando: false}

    case USER_STATE:
        return {...state, user: action.payload};
    case CERRAR_SESION:
        return {...state, user: action.payload};
    default: return state;
  }
}