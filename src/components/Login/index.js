import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './App.css';

import { connect } from "react-redux";
import * as loginActions from '../../actions/loginActions';

class Login extends Component{
  
  componentDidMount() {
    this.props.userState();
  }

  inputHandleChange = (event) => {
    if (event.target.name === 'correo') {
      return this.props.cambioCorreoLogin(event.target.value)
    } else if (event.target.name ==='contrasena') {
      return this.props.cambioContrasenaLogin(event.target.value)
    }
  }

  handleClickLogin = (e) => {
    e.preventDefault()
    const { correo_login, contrasena_login, loginWithEmailAndPassword} = this.props;
    const objetoUsuario = {
      email: correo_login,
      password: contrasena_login
    }
    loginWithEmailAndPassword(objetoUsuario);
    
  }

  desabilitar = () => {
    const {correo_login, contrasena_login, cargando} = this.props;
    const correoValido = (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(correo_login))
    
    if (cargando) {
      return true;
    }
    if (!correo_login || !correoValido || !contrasena_login) {
      return true;
    }
    return false;
  }

  render() {    
    return (
      <form className="formulario">
        { (this.props.user) ? <Redirect to='/muro'/> : ''}
        <h1>Iniciar sesión</h1>
        <div className="contenedor">
            <div className="input-contenedor">
              <i className="fas fa-envelope icon color-icon"></i>
              <input
                name="correo"
                type="email"
                placeholder="Correo Electronico"
                value={this.props.correo_login}
                onChange={ this.inputHandleChange}
              />
            </div>
           
            <div className="input-contenedor">
              <i className="fas fa-key icon color-icon"></i>
              <input
                name="contrasena"
                type="password"
                placeholder="Contraseña"
                value={ this.props.contrasena_login}
                onChange={ this.inputHandleChange}
              />
            </div>
  
            <input 
              type="submit" 
              value="Login" 
              className="button"
              onClick={this.handleClickLogin}
              disabled={this.desabilitar()}
            />
  
            <div className="tx-center">o</div>
            <div className="text-center">
              <button className="button button--state-google">
                <i className="fab fa-google icon"></i>
                Entrar con Google
              </button>
              <button className="button button--state-facebook ">
                <i className="fab fa-facebook-f icon"></i>
                Entrar con Facebook
              </button>
            </div>
            <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
            <p>¿No tienes una cuenta? <Link to='/register' className="link">Registrate </Link></p>
          </div>
      </form>
    );
  }
}

const mapStateToProps = ({ loginReducer}) => loginReducer;

export default connect(mapStateToProps, loginActions)(Login);