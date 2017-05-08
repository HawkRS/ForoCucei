'use strict';

import React from 'react';

require('styles//Home.css');
require('styles/style.css');


class AdmIndexComponent extends React.Component {
  render() {
    return (

      <section className="center-container">
        <div className="">
          <div className="bienvenida">
            <article className="article-block">
              <h1>Bienvenidos</h1>
              <p>
                The path of the righteous man is beset on all sides by the iniquities
                of the selfish and the tyranny of evil men. Blessed is he who, in the
                name of charity and good will, shepherds the weak through the valley
                of darkness, for he is truly his brother's keeper and the finder of
                lost children. And I will strike down upon thee with great vengeance
                and furious anger those who would attempt to poison and destroy My
                brothers. And you will know My name is the Lord when I lay My vengeance upon thee.
              </p>
              <small>Atte: Samuel L. Jackson</small>
            </article>
          </div>
          <div className="tuto-container">
            <h2>ULTIMOS TUTORIALES</h2>

            <article className="tutorial-article">
              <h3>Como instalar LAMP y no morir en el intento</h3>
              <div className="tuto-content">
                <figure className="tuto-image">
                  <img className="img-responsive" src="img/tuto.png" alt="tutorial" />
                </figure>
                <p className="tuto-text">
                  Look, just because I don't be givin' no man a foot massage don't make
                  it right for Marsellus to throw Antwone into a glass motherfuckin' house,
                  fuckin' up the way the nigger talks. Motherfucker do that shit to me,
                  he better paralyze my ass, 'cause I'll kill the motherfucker, know
                  what I'm sayin'?
                </p>
              </div>
            </article>

            <article className="tutorial-article">
              <h3>Como armar una peda con 300 para 20 personas</h3>
              <div className="tuto-content">
                <figure className="tuto-image">
                  <img className="img-responsive" src="img/tuto.png" alt="tutorial" />
                </figure>
                <p className="tuto-text">
                  Normally, both your asses would be dead as fucking fried chicken,
                  but you happen to pull this shit while I'm in a transitional
                  period so I don't wanna kill you, I wanna help you. But I can't
                  give you this case, it don't belong to me. Besides, I've already
                  been through too much shit this morning over this case to hand it
                  over to your dumb ass.
                </p>
              </div>
            </article>

            <article className="tutorial-article">
              <h3>Cucei sin buitres no es cucei</h3>
              <div className="tuto-content">
                <figure className="tuto-image">
                  <img className="img-responsive" src="img/tuto.png" alt="tutorial" />
                </figure>
                <p className="tuto-text">
                  Your bones don't break, mine do. That's clear. Your cells react
                  to bacteria and viruses differently than mine. You don't get
                  sick, I do. That's also clear. But for some reason, you and I
                  react the exact same way to water. We swallow it too fast, we
                  choke. We get some in our lungs, we drown. However unreal it
                  may seem, we are connected, you and I. We're on the same curve,
                  just on opposite ends.
                </p>
              </div>
            </article>
          </div>
          <div className="ask-container">
            <h2>ULTIMAS PREGUNTAS</h2>

            <article className="ask-article">
              <h3>Como funciona flexbox?</h3>
              <div className="ask-content">
                <figure className="ask-image">
                  <img className="img-responsive" src="img/ask.png" alt="tutorial" />
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

            <article className="ask-article">
              <h3>Problema con printf c++</h3>
              <div className="ask-content">
                <figure className="ask-image">
                  <img className="img-responsive" src="img/ask.png" alt="tutorial" />
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

            <article className="ask-article">
              <h3>De donde saco el proyecto para proga web con Michelle?</h3>
              <div className="ask-content">
                <figure className="ask-image">
                  <img className="img-responsive" src="img/ask.png" alt="tutorial" />
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

            <article className="ask-article">
              <h3>Como hago una instancia</h3>
              <div className="ask-content">
                <figure className="ask-image">
                  <img className="img-responsive" src="img/ask.png" alt="tutorial" />
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

            <article className="ask-article">
              <h3>Heil Hitler Bitch!</h3>
              <div className="ask-content">
                <figure className="ask-image">
                  <img className="img-responsive" src="img/ask.png" alt="tutorial" />
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
        </div>
      </section>

    );
  }
}
      AdmIndexComponent.displayName = 'AdmIndexComponent';

      // Uncomment properties you need
      // HomeComponent.propTypes = {};
      // HomeComponent.defaultProps = {};

      export default AdmIndexComponent;
