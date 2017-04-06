require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import LoginComponent from './LoginComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <LoginComponent />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
