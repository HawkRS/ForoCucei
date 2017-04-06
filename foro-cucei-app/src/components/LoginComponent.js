'use strict';

import React from 'react';
// import SignInComponent from './SignInComponent';
// import SignUpComponent from './SignUpComponent';
import ForgotPasswordComponent from './ForgotPasswordComponent';

require('styles/style.css');
require('styles//Login.css');

class LoginComponent extends React.Component {
  render() {
    return (
      <ForgotPasswordComponent />
    );
  }
}

LoginComponent.displayName = 'LoginComponent';

// Uncomment properties you need
// LoginComponent.propTypes = {};
// LoginComponent.defaultProps = {};

export default LoginComponent;
