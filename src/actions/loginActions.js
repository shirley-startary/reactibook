import { auth } from '../firebase/firebaseConfig';

export const cambioCorreoLogin = (text) => (dispatch) => {
  dispatch({
    type: 'cambio_correo_login',
    payload: text
  });
};

export const cambioContrasenaLogin = (text) => (dispatch) => {
  dispatch({
    type: 'cambio_contrasena_login',
    payload: text
  });
};

export const loginWithEmailAndPassword = (objetoUsuario) => async (dispatch) => {
  // dispatch({
  //   type: 'CARGANDO',
  // })
  const {email, password} = objetoUsuario;
  try {
    const respuesta = await auth.signInWithEmailAndPassword(email, password)
    console.log(respuesta.user);
    dispatch({
      type: 'logueado',
      payload: respuesta.user
    })
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: 'ERROR',
      payload: error.message
    })
  }
  
};