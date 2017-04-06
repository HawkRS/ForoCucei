'use strict';

import React from 'react';

require('styles//SignIn.css');

class SignInComponent extends React.Component {
  render() {
    return (
      <div className="login-section">
          <div className="login-container">
              <div className="login-title">
                  <h1>ForoCUCEI</h1>
                  <h3>Aprende, comparte, crece.</h3>
              </div>
              <div className="login-form">
                  <h3 className="logo">FC</h3>
                  <a href="signup.html" className="signup-link">Necesitas una cuenta? Registrate</a>
                  <form>
                      <div className="form-group">
                          <label>Email</label>
                          <input type="email" className="form-control" name="email" id="email-input" placeholder="Enter email"/>
                      </div>
                      <div className="form-group">
                          <label>Password</label>
                          <input type="password" className="form-control" name="password" id="password-input" placeholder="Password"/>
                      </div>
                      <button type="submit" className="btn btn-success btn-lg btn-block" style={{margin: 0, 'border-radius': 0}}>Iniciar sesion</button>
                  </form>
                  <a href="forgot-password.html" className="forgot-password-link">Olvidaste tu contrasena?</a>
              </div>
          </div>
      </div>
    );
  }
}

SignInComponent.displayName = 'SignInComponent';

// Uncomment properties you need
// SignInComponent.propTypes = {};
// SignInComponent.defaultProps = {};

export default SignInComponent;
