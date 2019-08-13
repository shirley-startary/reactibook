import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as postActions from '../../actions/postActions';

import './post.css';

class FormPost extends Component {
  handleOnChange = (e) => {
    if (e.target.name === 'comentario') {
      this.props.cambioTextoComentario(e.target.value);
    } else {
      this.props.cambioStatusComentario(e.target.value);
    }
  }

  handleOnClick = () => {
    const { comment, commentStatus, user, publicar} = this.props;

    const newPost = {
      autor:{
        email:user.email,
        name: user.displayName || 'Anónimo',
        photoUrl:user.photoURL || 'https://start-cons.com/wp-content/uploads/2019/03/person-dummy-e1553259379744.jpg', 
        uid:user.uid,
      },
      corazones: 0,
      mensaje: comment,
      status: commentStatus
    }  
    publicar(newPost);
  }

  desabilitar = () => {
    const {comment, cargando} = this.props;    
    if (cargando) {
      return true;
    }
    if (!comment || !comment.trim()) {
      return true;
    }
    return false;
  }

  render() {    
    return (
      <section className="form-post">
        <h5>Ingrese su nuevo comentario</h5>
        <textarea
          name="comentario"
          className="controls"
          placeholder="Ingrese su comentario"
          value={this.props.comment}
          onChange={this.handleOnChange}
        >
        </textarea>
        <button 
          type="button" 
          className="buttons" 
          onClick={this.handleOnClick}
          disabled={this.desabilitar()}>
          Publicar
        </button>
        <select name="status" className="buttons" defaultValue={'amigos'} onChange={this.handleOnChange}>
          <option value="amigos">Amigos</option>
          <option value="publico">Publico</option> 
        </select>
      </section>
    )
  }
}

const mapStateToProps = ({postReducer}) => postReducer;

export default connect(mapStateToProps, postActions)(FormPost);