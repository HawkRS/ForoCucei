'use strict';

import React from 'react';

require('styles//Footer.css');
require('styles/style.css');

class FooterComponent extends React.Component {
  render() {
    return (
      <div className="footer-component">
        <footer className="footer-container">
          <div className="contact">
            CONTACTO
          </div>
          <div className="site-map">
            MAPA DEL SITIO
          </div>
          <div className="back-button">
            <a href="#inicio"><i className="fa fa-arrow-circle-up fa-4x" aria-hidden="true"></i></a>
          </div>
        </footer>
      </div>
    );
  }
}

FooterComponent.displayName = 'FooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
