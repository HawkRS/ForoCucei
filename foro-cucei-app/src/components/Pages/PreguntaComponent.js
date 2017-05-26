'use strict';

import React from 'react';

require('styles//Home.css');
require('styles/style.css');


class PreguntaComponent extends React.Component {
  render() {
    return (

      <section className="center-container">

        <form className=""method="post">
          <label for="tema">Tema</label> <br/>
          <select name="tema" placeholder="Escribe un tema a tu pregunta" required="required">
            <option value="c/c++">C/C++</option>
            <option value="java">Java</option>
            <option value="c#">C#</option>
            <option value="python">Python</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option></select> <br/>
          <label for="titulo">Titulo</label> <br/>
          <input type="text" name="titulo" placeholder="Escribe el titulo de tu pregunta" required="required"/> <br/>
          <label for="pregunta">Pregunta</label> <br/>
          <input type="textfield" rows="4" cols="50" name="pregunta" placeholder="Escribe tu pregunta" required="required"/> <br/>
          <button type="submit" >Pregunta</button>

        </form>

      </section>

    );
  }
}
      PreguntaComponent.displayName = 'PreguntaComponent';

      // Uncomment properties you need
      // HomeComponent.propTypes = {};
      // HomeComponent.defaultProps = {};

      export default PreguntaComponent;
