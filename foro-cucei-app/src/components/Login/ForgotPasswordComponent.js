'use strict';

import React from 'react';

require('styles/style.css');
require('styles//Login.css');
require('styles//ForgotPassword.css');

class ForgotPasswordComponent extends React.Component {
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
                  <span className="forgot-text">Porfavor danos tu direccion de correo electronico y te enviaremos un mensaje.</span>
                  <form>
                      <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input type="email" className="form-control" name="email" id="email-input" placeholder="Enter email"/>
                      </div>
                      <button type="submit" className="btn btn-success btn-lg btn-block" style={{margin: 0, borderRadius: 0}}>Enviar</button>
                  </form>
              </div>
          </div>
      </section>
    );
  }
}

ForgotPasswordComponent.displayName = 'ForgotPasswordComponent';

// Uncomment properties you need
// ForgotPasswordComponent.propTypes = {};
// ForgotPasswordComponent.defaultProps = {};

export default ForgotPasswordComponent;
