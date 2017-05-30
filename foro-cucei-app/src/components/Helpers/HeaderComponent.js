'use strict';

import React from 'react';

require('styles/HeaderComponent.css');
require('styles/style.css');

import { Link } from 'react-router';

class HeaderComponent extends React.Component {
  goToSignup() {
    window.location = '/signup';
  }

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
                          <li><Link to={'/'}>Inicio</Link></li>
                          <li><Link to={'/tutoriales'}>Tutoriales</Link></li>
                          <li><Link to={'/preguntas'}>Preguntas</Link></li>
                          <li><Link to={'/faq'}>FAQ</Link></li>
                          <li><Link to={'/nosotros'}>Nosotros</Link></li>
                        </div>
                      </div>
                    </nav>
                    <nav className='desk-nav menu-conatainer'>
                      <ul className='navbar-container nav-menu-container'>
                        <li><Link to={'/'}>Inicio</Link></li>
                        <li><Link to={'/tutoriales'}>Tutoriales</Link></li>
                        <li><Link to={'/preguntas'}>Preguntas</Link></li>
                        <li><Link to={'/faq'}>FAQ</Link></li>
                        <li><Link to={'/nosotros'}>Nosotros</Link></li>
                        <li>
                          <div className='search-bar'>
                            <form className='search-bar-form'>
                              <input type='search' className='input-text' name='Buscar' placeholder='Buscar' style={{height: '35px', borderRadius: '2px', borderColor: '#0EB5B2'}}/>
                              <button type='submit' className='btn' name='Buscar' style={{height: '35px'}}><i className='fa fa-search fa-1x' aria-hidden='true'></i></button>
                            </form>
                          </div>
                        </li>
                        <li style={{marginLeft: '5px'}}><Link to='/signin'>Log in</Link></li>
                        <li style={{marginLeft: '5px'}}>
                          <button className='btn btn-success header-menu-button' style={{marginLeft: '5px'}} onClick={() => {this.goToSignup()}}>Sign up</button>
                        </li>
                      </ul>
                    </nav>
                  </div>
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
