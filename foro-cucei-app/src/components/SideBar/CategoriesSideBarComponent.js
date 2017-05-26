'use strict';

import React from 'react';

require('styles//CategoriesSideBar.css');

class CategoriesSideBarComponent extends React.Component {
  render() {
    return (
      <aside className="side-container">
        <div className="desk-user-nav">
          <div className="desk-user-header">
            <i className="fa fa-user-circle-o fa-user-desk-nav fa-3x" aria-hidden="true"></i>
            <strong><span className="user-name">John Doe</span></strong>
          </div>
          <nav className="">
            <ul>
              <li><a href="user-profile.html">Mi Perfil</a></li>
              <li><a href="#">Mis preguntas</a></li>
              <li><a href="login.html">Cerrar Sesion</a></li>
            </ul>
          </nav>
        </div>
        <a name="canales"></a>
        <div className="desk-forums">
          <div className="desk-user-header">
            <strong><span className="forum-header">Canales</span></strong>
          </div>
          <ul className="forum-list">
            <li className="c-forum"     ><a href="preguntas.html"><i className="fa fa-code fa-2x" aria-hidden="true"></i>C/C++</a></li>
            <li className="csharp-forum"><a href="preguntas.html"><i className="fa fa-code fa-2x" aria-hidden="true"></i>C#</a></li>
            <li className="css-forum"   ><a href="preguntas.html"><i className="fa fa-code fa-2x" aria-hidden="true"></i>CSS</a></li>
            <li className="python-forum"><a href="preguntas.html"><i className="fa fa-code fa-2x" aria-hidden="true"></i>PYTHON</a></li>
            <li className="java-forum"  ><a href="preguntas.html"><i className="fa fa-code fa-2x" aria-hidden="true"></i>JAVA</a></li>
            <li className="php-forum"   ><a href="preguntas.html"><i className="fa fa-code fa-2x" aria-hidden="true"></i>PHP</a></li>
            <li className="html-forum"  ><a href="preguntas.html"><i className="fa fa-code fa-2x" aria-hidden="true"></i>HTML</a></li>
          </ul>
        </div>
      </aside>
    );
  }
}

CategoriesSideBarComponent.displayName = 'CategoriesSideBarComponent';

// Uncomment properties you need
// CategoriesSideBarComponent.propTypes = {};
// CategoriesSideBarComponent.defaultProps = {};

export default CategoriesSideBarComponent;
