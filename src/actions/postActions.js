import { database,auth} from '../firebase/firebaseConfig';

import { TREAR_POSTS, USER_STATE, CERRAR_SESION, CARGANDO, ERROR } from '../types/muroTypes';


export const traerPosts = () => async (dispatch) => {
  dispatch({
    type: CARGANDO
  })

  try {
    database.ref('Posts').on('value', (snapshot) => {
      const newArray = Object.values(snapshot.val()).reverse();
      dispatch({
        type: TREAR_POSTS,
        payload: newArray
      })
    })  
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message
    })
  }
  
}

export const userState = () => async (dispatch) => {

  await auth.onAuthStateChanged(function(user) {
    if (user) {

      dispatch({
        type: USER_STATE,
        payload: user
      })

    } else {

    }
  });
}

export const cerrarSesion = () => async (dispatch) => {
  await auth.signOut();
  dispatch({
    type: CERRAR_SESION,
    payload: null
  })
  
}
