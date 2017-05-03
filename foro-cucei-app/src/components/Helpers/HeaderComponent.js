'use strict';

import React from 'react';

require('styles//HeaderComponent.css');
require('styles/style.css');

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className='headercomponent-component'>
        <a name='inicio'></a>
        <div className='container-fluid'>
            <header className='row'>
              <div className='header-container col-xs-12'>
                <div id='user-nav' className='header-element'>
                  <nav className='mobile-user-nav'>
                    <div className='dropdown' style={{float:'left'}}>
                      <button className='dropbtn'><i className='fa fa-user-circle-o fa-user-mobile-nav fa-2x' aria-hidden='true'></i></button>
                      <div className='dropdown-content' style={{left:0}}>
                        <a href='#'>Mi Perfil</a>
                      <a href='user.profile.html'>'Mi Perfil'</a>
                      <a href='usuarios.html'>'Usuarios'</a>
                      <a href='sub-tutorial.html'>'Tutoriales'</a>
                      <a href='#'>'Mis preguntas'</a>
                      <a href='login.html'>'Cerrar Sesion'</a>
                      </div>
                    </div>
                  </nav>
                </div>

                <div id='logo' className='header-element'>
                  TITULO EN PROCESO
                </div>

                <div id='menu-nav' className='header-element'>
                  <div className='navbar-top'>
                    <nav className='mobile-nav'>
                      <div className='dropdown' style={{float:'right'}}>
                        <button className='dropbtn'><i className='fa fa-bars fa-2x' aria-hidden='true'></i></button>
                        <div className='dropdown-content'>
                          <li><a href='index.html'>Inicio</a></li>
                          <li><a href='tutoriales.html'>Tutoriales</a></li>
                          <li><a href='#canales'>Canales</a></li>
                          <li><a href='faq.html'>FAQ</a></li>
                          <li><a href='contacto.html'>Contacto</a></li>
                          <li><a href='nosotros.html'>Nosotros</a></li>
                        </div>
                      </div>
                    </nav>
                    <nav className='desk-nav'>
                      <ul className='navbar-container'>
                        <li><a href='index.html'>Inicio</a></li>
                        <li><a href='tutoriales.html'>Tutoriales</a></li>
                        <li><a href='faq.html'>FAQ</a></li>
                        <li><a href='contacto.html'>Contacto</a></li>
                        <li><a href='nosotros.html'>Nosotros</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className='search-container col-xs-12'>
                <div className='search-bar'>
                  <form className='search-bar-form' action='index.html' method='post'>
                    <input type='search' className='input-text' name='Buscar' placeholder='Buscar'/>
                    <button type='submit' className='btn' name='Buscar'><i className='fa fa-search fa-2x' aria-hidden='true'></i></button>
                  </form>
                </div>
              </div>
            </header>
        </div>
      </div>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponentComponent.propTypes = {};
// HeaderComponentComponent.defaultProps = {};

export default HeaderComponent;
