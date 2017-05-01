require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {Router, Route, browserHistory, hashHistory } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory()

import SignInComponent          from './Login/SignInComponent';
import SignUpComponent          from './Login/SignUpComponent';
import ForgotPasswordComponent  from './Login/ForgotPasswordComponent';
import HomeComponent            from './Home/HomeComponent';
import FaqComponent             from './Pages/FaqComponent';
import TerminosComponent        from './Pages/TerminosComponent';
import ContactoComponent        from './Pages/ContactoComponent';
import NosotrosComponent        from './Pages/NosotrosComponent';
import TutorialesComponent      from './Pages/TutorialesComponent';
import PreguntasComponent       from './Pages/PreguntasComponent';
import TutoIndComponent         from './Pages/TutoIndComponent';
import PreguntaComponent        from './Pages/PreguntaComponent';
import PregIndComponent         from './Pages/PregIndComponent';
import PerfilComponent          from './User/PerfilComponent';
import UserEditComponent        from './User/UserEditComponent';
import UsuariosComponent        from './Admin/UsuariosComponent';
import AdmIndexComponent        from './Admin/AdmIndexComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <Router history={customHistory}>
        <div>
          <Route exact={true} path={"/"} component={HomeComponent}/>
          <Route exact={true} path={"/signin"} component={SignInComponent}/>
          <Route exact={true} path={"/signup"} component={SignUpComponent}/>
          <Route exact={true} path={"/forgot-password"} component={ForgotPasswordComponent}/>
          <Route exact={true} path={"/faq"} component={FaqComponent}/>
          <Route exact={true} path={"/terminos"} component={TerminosComponent}/>
          <Route exact={true} path={"/contacto"} component={ContactoComponent}/>
          <Route exact={true} path={"/nosotros"} component={NosotrosComponent}/>
          <Route exact={true} path={"/tutoriales"} component={TutorialesComponent}/>
          <Route exact={true} path={"/preguntas"} component={PreguntasComponent}/>
          <Route exact={true} path={"/tutorial-ind"} component={TutoIndComponent}/>
          <Route exact={true} path={"/nueva-pregunta"} component={PreguntaComponent}/>
          <Route exact={true} path={"/pregunta-ind"} component={PregIndComponent}/>
          <Route exact={true} path={"/perfil"} component={PerfilComponent}/>
          <Route exact={true} path={"/usuario-editar"} component={UserEditComponent}/>
          <Route exact={true} path={"/admin/usuarios"} component={UsuariosComponent}/>
          <Route exact={true} path={"/admin/index"} component={AdmIndexComponent}/>

        </div>
      </Router>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
