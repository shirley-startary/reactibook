import { auth } from '../firebase/firebaseConfig';
import { 
  CAMBIO_CORREO_LOGIN, 
  CAMBIO_CONTRASENA_LOGIN, 
  LOGUEADO,
  USER_STATE,
  CARGANDO
} from '../types/loginTypes';

export const cambioCorreoLogin = (text) => (dispatch) => {
  dispatch({
    type: CAMBIO_CORREO_LOGIN,
    payload: text
  });
};

export const cambioContrasenaLogin = (text) => (dispatch) => {
  dispatch({
    type: CAMBIO_CONTRASENA_LOGIN,
    payload: text
  });
};

export const loginWithEmailAndPassword = (objetoUsuario) => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  })
  const {email, password} = objetoUsuario;
  try {
    const respuesta = await auth.signInWithEmailAndPassword(email, password)
    dispatch({
      type: LOGUEADO,
      payload: respuesta.user
    })
  } catch (error) {
    dispatch({
      type: 'ERROR',
      payload: error.message
    })
  }
  
};

export const userState = () => async (dispatch) => {

  await auth.onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.

      dispatch({
        type: USER_STATE,
        payload: user
      })
      
      // ...
    } else {

    }
  });
}