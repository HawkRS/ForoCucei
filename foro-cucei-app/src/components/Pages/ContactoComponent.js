'use strict';

import React from 'react';

require('styles//Home.css');
require('styles/style.css');


class ContactoComponent extends React.Component {
  render() {
    return (

      <section className="center-container">
        <div className="">
          <article className="contact-text">
            <h2>CONTACTO</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
          <div className="contact-container">
            <form className="contact-form" action="index.html" method="post">
              <div className="form-element">
                <label for="nombre">Tu nombre</label>
                <input type="text" name="nombre" required />
              </div>
              <div className="form-element">
                <label for="correo">Tu correo</label>
                <input type="email" name="correo" required />
              </div>
              <div className="form-element">
                <label for="asunto">Asunto</label>
                <input type="text" name="asunto" required />
              </div>
              <div className="form-element">
                <label for="mensaje">Mensaje</label>
                <textarea name="mensaje" cols="30" rows="10" required></textarea>
              </div>
              <div className="form-btn">
                <input className="btn btn-primary" type="submit" name="enviar" value="Enviar"/>
                <input className="btn btn-warning" type="reset" name="reset" value="Borrar"/>
              </div>
            </form>
          </div>
        </div>
      </section>

    );
  }
}
      ContactoComponent.displayName = 'ContactoComponent';

      // Uncomment properties you need
      // HomeComponent.propTypes = {};
      // HomeComponent.defaultProps = {};

      export default ContactoComponent;
