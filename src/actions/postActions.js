import { database,auth} from '../firebase/firebaseConfig';

import { 
  TREAR_POSTS, 
  USER_STATE, 
  CERRAR_SESION, 
  CARGANDO, ERROR, 
  CAMBIO_TEXTO_COMENTARIO, 
  CAMBIO_STATUS_COMENTARIO,
  PUBLICAR_COMENTARIO,
  ELIMINAR_COMENTARIO,
  AGREGAR_MENSAJE_EN_INPUT,
  ACTUALIZA_MENSAJE
} from '../types/muroTypes';


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

export const cambioTextoComentario = (texto) => (dispatch) => {
  dispatch({
    type: CAMBIO_TEXTO_COMENTARIO,
    payload: texto
  })
}

export const cambioStatusComentario = (status) => (dispatch) => {
  dispatch({
    type: CAMBIO_STATUS_COMENTARIO,
    payload: status
  })
}

export const publicar = (post) => async (dispatch) => {
  // console.log(tarea);
  dispatch({
    type: CARGANDO,
  })
  try {
    const key = await database.ref().child('posts').push().key;
    await database.ref(`/Posts/${key}`).set({
      ...post,
      postId: key,
    });
    dispatch({
      type: PUBLICAR_COMENTARIO,
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Intente más tarde',
    })
  }
}

export const agregarMensajeEnInput = (mensaje) => (dispatch) => {
  console.log(mensaje);
  dispatch({
    type: AGREGAR_MENSAJE_EN_INPUT,
    payload: mensaje
  })
  
}

export const editarComentario = (comentarioId, mensaje) => async (dispatch) => {
  dispatch({
    type: CARGANDO
  })
  try {
    const updates = {};
    updates['/Posts/' + comentarioId + '/mensaje'] = mensaje;
    await database.ref().update(updates);
    
    dispatch({
      type: ACTUALIZA_MENSAJE,
    })
    
  } catch (error) {
    dispatch({
      type:ERROR,
      payload:error.message
    })
  }
  
}

export const eliminarComentario = (comentarioId) => async (dispatch) => {
  dispatch({
    type: CARGANDO
  })
  try {
    let confirmacion = window.confirm('¿Seguro que quieres eliminar el comentario?');
    if (confirmacion) {
      await database.ref(`/Posts/${comentarioId}`).remove();
    }  
    
    dispatch({
      type:ELIMINAR_COMENTARIO,
      payload:[]
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message
    })
  }
}

