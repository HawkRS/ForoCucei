'use strict';

import React from 'react';

require('styles//Home.css');
require('styles/style.css');


class UserEditComponent extends React.Component {
  render() {
    return (

      <section className="center-container">
        <div className="panel edit-panel">
          <div className="panel-header">
            EDITAR USUARIO
          </div>
          <div className="panel-body">
            <div className="edit-container">
              <form className="edit-form" action="usuarios.html" method="post">
                <div className="form-element">
                  <label for="nombre">Nombre</label>
                  <input type="text" name="nombre" value="John Doe" required />
                </div>
                <div className="form-element">
                  <label for="correo">Correo</label>
                  <input type="email" name="correo" value="johndoe@mail.com" required />
                </div>
                <div className="form-element">
                  <label for="nickname">Nickname</label>
                  <input type="text" name="nickname" value="BigJD" required />
                </div>
                <div className="form-btn">
                  <input className="btn btn-primary" type="submit" name="Guardar" value="Enviar"/>
                  <input className="btn btn-warning" type="reset" name="reset" value="Borrar"/>
                  <input className="btn btn-danger"  type="button" name="name" value="Cancelar"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    );
  }
}
      UserEditComponent.displayName = 'UserEditComponent';

      // Uncomment properties you need
      // HomeComponent.propTypes = {};
      // HomeComponent.defaultProps = {};

      export default UserEditComponent;
