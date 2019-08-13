import React, { Component } from 'react';
import '../Muro/muro.css';

import { connect } from 'react-redux';

import * as postActions from "../../actions/postActions";

class PostList extends Component {

  editar = (e) => {
    const inputMensaje = document.querySelector(`div[data-mensaje='${e.target.dataset.id}']`);
    const boxEdit = document.querySelector(`div[data-boxedit='${e.target.dataset.id}']`);
    this.editarHideAndShow(inputMensaje, boxEdit)
  }

  editarHideAndShow = (inputMensaje,boxEdit) => {
    // const inputMensaje = document.querySelector(`div[data-mensaje='${e.target.dataset.id}']`);
    // const boxEdit = document.querySelector(`div[data-boxedit='${e.target.dataset.id}']`);
    if (inputMensaje.classList.contains("hide")) {
      inputMensaje.classList.remove("hide");
      inputMensaje.classList.add("show");
      boxEdit.classList.add("hide");
      boxEdit.classList.remove("show");

    } else {
      inputMensaje.classList.remove("show");
      inputMensaje.classList.add("hide");
      boxEdit.classList.add("show");
      boxEdit.classList.remove("hide");
    }
  }

  ponerPost = () => {
    const { posts, eliminarComentario } = this.props;
    return posts.map((post) => {
      return (
        <li key={post.postId}>
          <div className="comment-main-level">
            {/* <!-- Avatar --> */}
            <div className="comment-avatar"><img src={post.autor.photoUrl?post.autor.photoUrl:'https://start-cons.com/wp-content/uploads/2019/03/person-dummy-e1553259379744.jpg'} alt=""/></div>
            {/* <!-- Contenedor del Comentario --> */}
            <div className="comment-box">
                <div className="comment-head">
                  <h6 className="comment-name by-author"><a href="http://creaticode.com/blog">{post.autor.name? post.autor.name: 'unknown'}</a></h6>
                  {/* <span>hace 20 minutos</span> */}
                  {/* <i className="fa fa-reply"></i> */}
                  <i data-id={post.postId} className="fa fa-heart"><span>{post.corazones}</span></i>
                  {(post.autor.uid === this.props.user.uid)? <i data-id={post.postId} className="fas fa-edit" onClick={this.editar}></i> : ''}
                  {(post.autor.uid === this.props.user.uid)? <i className="fas fa-trash-alt" onClick={() => { eliminarComentario(post.postId)}}></i> : ''}
                </div>
                <div className="comment-content" data-mensaje={post.postId}>
                    {post.mensaje}
                </div>
                <div className="comment-content hide" data-boxedit={post.postId}>
                  <input className="controls input-config" type="text" value={post.mensaje} />
                  <input className="buttons button-config" type="button" value="Enviar" data-id={post.postId} onClick={this.editar}/>
                </div>
            </div>
          </div>
        </li>
      )
    })
  }
  
  render(){
    return (
      <ul id="comments-list" className="comments-list">
        {this.ponerPost()}
      </ul>
    )
  }

}

const mapStateToProps = (reducer) => {
  return reducer.postReducer;
}

export default connect(mapStateToProps, postActions)(PostList);