'use strict';

import React from 'react';

require('styles//Home.css');
require('styles/style.css');


class PreguntasComponent extends React.Component {
  render() {
    return (

      <section className="center-container">
        <div className="ask-container">
          <h2>TODAS LAS PREGUNTAS</h2>

          <article className="ask-article-all">
            <a href="pregIndividual.html"><h3>Como funciona flexbox?</h3></a>
            <div className="ask-content">
              <figure className="ask-image">
                <a href="pregIndividual.html"><img className="img-responsive" src="img/ask.png" alt="tutorial" /></a>
              </figure>
              <p className="ask-text">
                Two words: nail, salon. It's perfect for money laundering, it's a
                high-volume, cash-preferred business with a discreet workforce.
                Nobody does mista-me-know-nothing better than Mrs. Mukjayaporn
                and her gals.
              </p>
            </div>
            <span className="lang-tag csharp-tag">C#</span>
          </article>

          <article className="ask-article-all">
            <a href="pregIndividual.html"><h3>Problema con printf c++</h3></a>
            <div className="ask-content">
              <figure className="ask-image">
                <a href="pregIndividual.html"><img className="img-responsive" src="img/ask.png" alt="tutorial" /></a>
              </figure>
              <p className="ask-text">
                Drum roll, please. Wait for it. Lazer tag. Lazer tag! 7,000 square
                feet of rollicking fun in the heart of northern Bernalillo County!
                It adds up perfectly. Walt's a scientist, scientists love lazers.
                Plus, they got bumper boats, so...
              </p>
            </div>
            <span className="lang-tag c-tag">C++</span>
          </article>

          <article className="ask-article-all">
            <a href="pregIndividual.html"><h3>De donde saco el proyecto para proga web con Michelle?</h3></a>
            <div className="ask-content">
              <figure className="ask-image">
                <a href="pregIndividual.html"><img className="img-responsive" src="img/ask.png" alt="tutorial" /></a>
              </figure>
              <p className="ask-text">
                Si llego a este punto no crea que lo copiamos, pase todo el fin
                haciendo esto, es mas, hasta puntos extras merecemos hahaha;
                Aqui iria una parte del texto de la pregunta, con un link a la
                pregunta completa y sus respectivas respuestas.
              </p>
            </div>
            <span className="lang-tag php-tag">PHP</span>
            <span className="lang-tag html-tag">HTML</span>
            <span className="lang-tag css-tag">CSS</span>
          </article>

          <article className="ask-article-all">
            <a href="pregIndividual.html"><h3>Como hago una instancia</h3></a>
            <div className="ask-content">
              <figure className="ask-image">
                <a href="pregIndividual.html"><img className="img-responsive" src="img/ask.png" alt="tutorial" /></a>
              </figure>
              <p className="ask-text">
                This is glass grade. I mean, you got... Jesus, you got crystals
                in here 2 inches, 3 inches long. This is pure glass. You're a
                damn artist! This is art, Mr. White! Yeah, that's the thing,
                y'know? Your scumbag brother-in-law took my rainy day fund.
                Oh yeah. And tell that douche bag brother-in-law of yours to
                go towards the light.
              </p>
            </div>
            <span className="lang-tag python-tag">PYTHON</span>
          </article>

          <article className="ask-article-all">
            <a href="pregIndividual.html"><h3>Heil Hitler Bitch!</h3></a>
            <div className="ask-content">
              <figure className="ask-image">
                <a href="pregIndividual.html"><img className="img-responsive" src="img/ask.png" alt="tutorial" /></a>
              </figure>
              <p className="ask-text">
                What? Come on! Man, you're smart. You made poison out of beans,
                yo. Look, we got, we got an entire lab right here. Alright? How
                about you pick some of these chemicals and mix up some rocket
                fuel? That way you could just send up a signal flare. Or you
                make some kind of robot to get us help, or a homing device,
                or build a new battery, or... wait. No. What if we just take
                some stuff off of the RV and build it into something completely
                different? You know, like a... Like a dune buggy. That way, we
                can just dune buggy or... What? Hey? What is it? What?
              </p>
            </div>
            <span className="lang-tag java-tag">JAVA</span>
          </article>

        </div>
      </section>

    );
  }
}
PreguntasComponent.displayName = 'PreguntasComponent';

// Uncomment properties you need
// HomeComponent.propTypes = {};
// HomeComponent.defaultProps = {};

export default PreguntasComponent;
