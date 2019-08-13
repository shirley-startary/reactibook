import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import './muro.css';
import { connect } from 'react-redux';

import * as postActions from "../../actions/postActions";

import Navbar from '../Navbar';
import PostList from '../PostList';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import FormPost from './FormNewPost';


class Muro extends Component {
  UNSAFE_componentWillMount(){
    this.props.userState()
  };

  componentDidMount() {
    
    if (!(this.props.posts).length) {
      this.props.traerPosts();
    }
  };

  componentDidUpdate(){
    if (!(this.props.posts).length) {
      this.props.traerPosts();
    }
  }

  ponerContenido = () =>  {
    if (this.props.cargando) {
      return <Spinner/>
    }
    if (this.props.error) {
      return <Fatal mensaje={this.props.error} />
    }
    return (
      <div>
        <Navbar/>
        <FormPost/>
        <div className="comments-container">
          <h1>Comentarios</h1>
          <PostList/>
        </div>
      </div>
    )
  };

  render() {    
    return (
      <div>
        {!this.props.user ? <Redirect to="/"/>:''}
        {this.ponerContenido()}
      </div>
    )
  }
}

const mapStateToProps = (reducer) => {  
  return reducer.postReducer;
}

export default connect(mapStateToProps, postActions)(Muro);