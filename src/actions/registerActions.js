import { auth } from '../firebase/firebaseConfig';

import { 
  CAMBIO_NOMBRE_REGISTER,
  CAMBIO_CORREO_REGISTER,
  CAMBIO_CONTRASENA_REGISTER,
  REGISTER,
  CARGANDO,
  ERROR,
 } from '../types/registerTypes';

export const cambioNombreRegister= (text) => (dispatch) => {
  dispatch({
    type: CAMBIO_NOMBRE_REGISTER,
    payload: text
  });
};

export const cambioCorreoRegister= (text) => (dispatch) => {
  dispatch({
    type: CAMBIO_CORREO_REGISTER,
    payload: text
  });
};

export const cambioContrasenaRegister= (text) => (dispatch) => {
  dispatch({
    type: CAMBIO_CONTRASENA_REGISTER,
    payload: text
  });
};

export const registerWithEmailAndPassword = (objetoUsuario) => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  })
  const {email, password} = objetoUsuario;
  try {
    const respuesta = await auth.createUserWithEmailAndPassword(email, password)
    dispatch({
      type: REGISTER,
      payload: respuesta.user
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error
    })
  }
};