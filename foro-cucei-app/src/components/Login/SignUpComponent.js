'use strict';

import React from 'react';

require('styles/style.css');
require('styles//Login.css');
require('styles//SignUp.css');

class SignUpComponent extends React.Component {
  render() {
    return (
      <section className="login-section">
          <div className="login-container">
              <div className="login-title">
                  <h1>ForoCUCEI</h1>
                  <h3>Aprende, comparte, crece.</h3>
              </div>
              <div className="login-form">
                  <h3 className="logo">FC</h3>
                  <a href="login.html" className="signup-link">Ya tienes una cuenta? Inicia sesion</a>
                  <form>
                      <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input type="email" className="form-control" name="email" id="email-input" placeholder="Enter email"/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input type="password" className="form-control" name="password" id="password-input" placeholder="Password"/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="password-confirm">Confirmar Password</label>
                          <input type="password" className="form-control" name="password-confirm" id="password-confirm-input" placeholder="Confirmar Password"/>
                      </div>
                      <button onClick="goToIndex()" type="submit" className="btn btn-success btn-lg btn-block" style={{margin: 0, borderRadius: 0}}>Registrar</button>
                  </form>
              </div>
          </div>
      </section>
    );
  }
}

SignUpComponent.displayName = 'SignUpComponent';

// Uncomment properties you need
// SignUpComponent.propTypes = {};
// SignUpComponent.defaultProps = {};

export default SignUpComponent;
