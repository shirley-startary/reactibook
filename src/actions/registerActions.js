import { auth } from '../firebase/firebaseConfig';

export const cambioNombreRegister= (text) => (dispatch) => {
  dispatch({
    type: 'cambio_nombre_register',
    payload: text
  });
};

export const cambioCorreoRegister= (text) => (dispatch) => {
  dispatch({
    type: 'cambio_correo_register',
    payload: text
  });
};

export const cambioContrasenaRegister= (text) => (dispatch) => {
  dispatch({
    type: 'cambio_contrasena_register',
    payload: text
  });
};

export const registerWithEmailAndPassword = (objetoUsuario) => async (dispatch) => {
  // dispatch({
  //   type: 'CARGANDO',
  // })
  const {email, password} = objetoUsuario;
  try {
    const respuesta = await auth.createUserWithEmailAndPassword(email, password)
    console.log(respuesta.user);
    dispatch({
      type: 'register',
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