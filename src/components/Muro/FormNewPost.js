import React, { Component } from 'react';
import './post.css';

class FormPost extends Component {
  render() {
    return (
      <section className="form-post">
        <h5>Ingrese su nuevo comentario</h5>
        <textarea className="controls" placeholder="Ingrese su comentario"></textarea>
        <button type="button" className="buttons">Publicar</button>
        <select className="buttons" name="select">
          <option value="value2" selected>Amigos</option>
          <option value="value1">Publico</option> 
        </select>
      </section>
    )
  }
}

export default FormPost;