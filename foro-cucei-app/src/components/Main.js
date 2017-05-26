require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Route, Router, browserHistory } from 'react-router';

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
      <Router history={browserHistory}>
        <div>
            <Route path={'/signin'} component={SignInComponent}/>
            <Route path={'/signup'} component={SignUpComponent}/>
            <Route path={'/forgot-password'} component={ForgotPasswordComponent}/>
            <Route path={'/'} component={HomeComponent}>
              <Route path={'faq'} components={{ content: FaqComponent }}/>
              <Route path={'terminos'} components={{ content: TerminosComponent }}/>
              <Route path={'contacto'} components={{ content: ContactoComponent }}/>
              <Route path={'nosotros'} components={{ content: NosotrosComponent }}/>
              <Route path={'tutoriales'} components={{ content: TutorialesComponent }}/>
              <Route path={'preguntas'} components={{ content: PreguntasComponent }}/>
              <Route path={'tutorial-ind'} components={{ content: TutoIndComponent }}/>
              <Route path={'nueva-pregunta'} components={{ content: PreguntaComponent }}/>
              <Route path={'pregunta-ind'} components={{ content: PregIndComponent }}/>
              <Route path={'perfil'} components={{ content: PerfilComponent }}/>
              <Route path={'usuario-editar'} components={{ content: UserEditComponent }}/>
              <Route path={'admin/usuarios'} components={{ content: UsuariosComponent }}/>
              <Route path={'admin/index'} components={{ content: AdmIndexComponent }}/>
            </Route>
        </div>
      </Router>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
