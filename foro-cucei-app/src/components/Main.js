require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {Router, Route, browserHistory, hashHistory } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory()

import SignInComponent from './Login/SignInComponent';
import SignUpComponent from './Login/SignUpComponent';
import ForgotPasswordComponent from './Login/ForgotPasswordComponent';
import HomeComponent from './Home/HomeComponent';
class AppComponent extends React.Component {
  render() {
    return (
      <Router history={customHistory}>
        <div>
          <Route exact={true} path={"/"} component={HomeComponent}/>
          <Route exact={true} path={"/signin"} component={SignInComponent}/>
          <Route exact={true} path={"/signup"} component={SignUpComponent}/>
          <Route exact={true} path={"/forgot-password"} component={ForgotPasswordComponent}/>
        </div>
      </Router>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
