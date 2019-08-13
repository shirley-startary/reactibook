import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';

import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';


import { connect } from "react-redux";
import * as registerActions from '../../actions/registerActions';

class Register extends Component {

  inputHandleChange = (event) => {
    if (event.target.name === 'correo') {
      return this.props.cambioCorreoRegister(event.target.value)
    } else if (event.target.name ==='contrasena') {
      return this.props.cambioContrasenaRegister(event.target.value)
    } else {
      return this.props.cambioNombreRegister(event.target.value)
    }
  };

  handleClickLogin = (e) => {
    e.preventDefault()
    const {
      nombre_register, 
      correo_register, 
      contrasena_register, 
      registerWithEmailAndPassword} = this.props;

    const objetoUsuario = {
      name: nombre_register,
      email: correo_register,
      password: contrasena_register
    }
    registerWithEmailAndPassword(objetoUsuario); 
  };

  ponerContenido = () =>  {
    if (this.props.cargando) {
      return <Spinner/>
    }

    return (  
      <form className="formulario">
        { (this.props.regresar) ? <Redirect to="/muro"/> : '' }
        <h1>Registrate</h1>
        <div className="contenedor">
        
          <div className="input-contenedor">
            <i className="fas fa-user icon"></i>
            <input 
              type="text"
              name="nombre" 
              placeholder="Nombre Completo"
              value={ this.props.nombre_register}
              onChange={this.inputHandleChange}
            /> 
          </div>
          
          <div className="input-contenedor">
            <i className="fas fa-envelope icon"></i>
            <input 
              type="email"
              name="correo" 
              placeholder="Correo Electronico"
              value={ this.props.correo_register}
              onChange={this.inputHandleChange}
            /> 
          </div>
          <div className="input-contenedor">
            <i className="fas fa-key icon"></i>
            <input 
              type="password"
              name="contrasena" 
              placeholder="Contraseña"
              value={ this.props.contrasena_register}
              onChange={this.inputHandleChange}
            />
          </div>
          <Fatal mensaje={this.props.error ? this.props.error.message : ''}/>
          <input 
            type="submit"
            value="Registrate"
            className="button"
            onClick={this.handleClickLogin}
          />
          <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
          <p>¿Ya tienes una cuenta?<Link className="link" to="/"> Iniciar Sesion</Link></p>
        </div>
      </form>
    )
  };

  render () {
    return (
      <div>
        {this.ponerContenido()}
      </div>
    )
  }

};
const mapStateToProps = ({ registerReducer }) => registerReducer ;

export default connect(mapStateToProps, registerActions)(Register);