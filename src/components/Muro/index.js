import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import './muro.css';
import { connect } from 'react-redux';

import * as postActions from "../../actions/postActions";

import Navbar from '../Navbar';
import PostList from '../PostList';
import Spinner from '../General/Spinner';


class Muro extends Component {
  componentWillMount(){
    this.props.userState()
  };

  componentDidMount() {
    this.props.traerPosts();
  };

  ponerContenido = () =>  {
    if (this.props.cargando) {
      return <Spinner/>
    }
    return (
      <div>
        <Navbar/>
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