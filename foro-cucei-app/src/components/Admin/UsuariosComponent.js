'use strict';

import React from 'react';

require('styles//Home.css');
require('styles/style.css');


class UsuariosComponent extends React.Component {
  render() {
    return (

      <section className="center-container">
        <div className="panel">
          <div className="panel-header">
            USUARIOS REGISTRADOS
          </div>
          <div className="panel-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Nickname</th>
                  <th>Correo</th>
                  <th>Fecha de registro</th>
                  <th>Preguntas</th>
                  <th>Respuestas</th>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>BigJD</td>
                  <td>johndoe@mail.com</td>
                  <td>15-12-16</td>
                  <td>15</td>
                  <td>63</td>
                  <td><a href="editar_usuario.html"><button className="btn btn-warning" type="button" name="button">Editar</button></a></td>
                  <td><button className="btn btn-danger" type="button" name="button">Eliminar</button></td>
                </tr>
                <tr>
                  <td>Jane Doe</td>
                  <td>PrettyJane</td>
                  <td>janedoe@mail.com</td>
                  <td>08-11-16</td>
                  <td>125</td>
                  <td>115</td>
                  <td><a href="editar_usuario.html"><button className="btn btn-warning" type="button" name="button">Editar</button></a></td>
                  <td><button className="btn btn-danger" type="button" name="button">Eliminar</button></td>
                </tr>
                <tr>
                  <td>Tony Montana</td>
                  <td>Scarface</td>
                  <td>littlefriend@mail.com</td>
                  <td>03-01-17</td>
                  <td>89</td>
                  <td>69</td>
                  <td><a href="editar_usuario.html"><button className="btn btn-warning" type="button" name="button">Editar</button></a></td>
                  <td><button className="btn btn-danger" type="button" name="button">Eliminar</button></td>
                </tr>
                <tr>
                  <td>David Toral</td>
                  <td>Garlan0</td>
                  <td>toraldo@mail.com</td>
                  <td>30-10-16</td>
                  <td>10</td>
                  <td>150</td>
                  <td><a href="editar_usuario.html"><button className="btn btn-warning" type="button" name="button">Editar</button></a></td>
                  <td><button className="btn btn-danger" type="button" name="button">Eliminar</button></td>
                </tr>
                <tr>
                  <td>Miguel Serrano</td>
                  <td>Serranom</td>
                  <td>Serranom4@mail.com</td>
                  <td>30-10-16</td>
                  <td>6</td>
                  <td>120</td>
                  <td><a href="editar_usuario.html"><button className="btn btn-warning" type="button" name="button">Editar</button></a></td>
                  <td><button className="btn btn-danger" type="button" name="button">Eliminar</button></td>
                </tr>
                <tr>
                  <td>Carlos Gonzalez</td>
                  <td>Hawkrs</td>
                  <td>Hawkrs@mail.com</td>
                  <td>10-10-16</td>
                  <td>10</td>
                  <td>98</td>
                  <td><a href="editar_usuario.html"><button className="btn btn-warning" type="button" name="button">Editar</button></a></td>
                  <td><button className="btn btn-danger" type="button" name="button">Eliminar</button></td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </section>

    );
  }
}
      UsuariosComponent.displayName = 'UsuariosComponent';

      // Uncomment properties you need
      // HomeComponent.propTypes = {};
      // HomeComponent.defaultProps = {};

      export default UsuariosComponent;
