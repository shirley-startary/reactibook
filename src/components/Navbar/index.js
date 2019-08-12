import React, { Component } from 'react';
import logo from '../logo.svg'
import './navbar.css';

import { connect } from 'react-redux';

import * as postActions from "../../actions/postActions";


class Navbar extends Component {
  efectIcono = () => {
    let enlaces = document.getElementById("enlaces");
    if (enlaces.classList.contains('uno')){
      enlaces.classList.add('dos');
      enlaces.classList.remove('uno');
    } else {
      enlaces.classList.add('uno');
      enlaces.classList.remove('dos');
    }
        
  }

  render(){
    return (
      <header >
        <nav>
          <div className="logo">
            <img src={logo} className="App-logo" alt="logo"/>
          </div>
          <div className="icono" onClick={this.efectIcono} id="icono">
            <span>&#9776;</span>
          </div>
          <div className="enlaces uno" id="enlaces" onClick={this.efectIcono}>
            <a href="/perfil">Perfil</a>
            <div onClick={this.props.cerrarSesion}><a href="/">Cerrar Sesion</a></div>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (reducer) => {
  return reducer.postReducer;
}

export default connect(mapStateToProps, postActions)(Navbar);