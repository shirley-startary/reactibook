import React, { Component } from 'react';
import '../Muro/muro.css';

import { connect } from 'react-redux';

import * as postActions from "../../actions/postActions";

class PostList extends Component {

  ponerPost = () => (
    this.props.posts.map((post) => {
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
                  <i className="fa fa-reply"></i>
                  <i className="fa fa-heart"></i>
                  {(post.autor.uid === this.props.user.uid)? <i className="fas fa-edit"></i> : ''}
                  {(post.autor.uid === this.props.user.uid)? <i className="fas fa-trash-alt"></i> : ''}
                </div>
                <div className="comment-content">
                    {post.mensaje}
                </div>
            </div>
          </div>
        </li>
      )
    })
  )
  
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