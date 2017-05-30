'use strict';

import React from 'react';

require('styles//Home.css');
require('styles/style.css');


class TutorialesComponent extends React.Component {
  render() {
    return (

      <section className="center-container">

        <div className="add-tuto">
          <div className="add-tuto-element">
            <strong><span className="add-tuto-text">Tenemos un total de: 20 tutoriales.</span></strong>
          </div>
          <div className="add-tuto-element">
            <a href="add_tuto.html"><button className="btn btn-primary btn-block" type="button" name="button">Nuevo tutorial</button></a>
          </div>
        </div>
        <div className="tuto-container">
          <h2>TODOS LOS TUTORIALES</h2>

          <article className="tutorial-article-all">
            <a href="tutIndividual.html"><h3>Como instalar LAMP y no morir en el intento</h3></a>
            <div className="tuto-content">
              <figure className="tuto-image">
                <a href="tutIndividual.html"><img className="img-responsive" src="img/tuto.png" alt="tutorial" /></a>
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

          <article className="tutorial-article-all">
            <a href="tutIndividual.html"><h3>Como armar una peda con 300 para 20 personas</h3></a>
            <div className="tuto-content">
              <figure className="tuto-image">
                <a href="tutIndividual.html"><img className="img-responsive" src="img/tuto.png" alt="tutorial" /></a>
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

          <article className="tutorial-article-all">
            <a href="tutIndividual.html"><h3>Cucei sin buitres no es cucei</h3></a>
            <div className="tuto-content">
              <figure className="tuto-image">
                <a href="tutIndividual.html"><img className="img-responsive" src="img/tuto.png" alt="tutorial" /></a>
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

          <article className="tutorial-article-all">
            <a href="tutIndividual.html"><h3>Cómo buitrear sin recibir una cachetada</h3></a>
            <div className="tuto-content">
              <figure className="tuto-image">
                <a href="tutIndividual.html"><img className="img-responsive" src="img/tuto.png" alt="tutorial" /></a>
              </figure>
              <p className="tuto-text">
                You asked me if we were in the meth business or the money
                business. Neither, I’m in the empire business. I was under the
                impression that you had this under control. Well, that's what
                this is - problem solving. Skyler this is a simple division of
                labor - I bring in the money, you launder the money. This is
                what you wanted.
              </p>
            </div>
          </article>

          <article className="tutorial-article-all">
            <a href="tutIndividual.html"><h3>Conseguir un título siendo almirante</h3></a>
            <div className="tuto-content">
              <figure className="tuto-image">
                <a href="tutIndividual.html"><img className="img-responsive" src="img/tuto.png" alt="tutorial" /></a>
              </figure>
              <p className="tuto-text">
                Today's your lucky day. Look around, kiddo - it's all yours.
                You are now the owner of this fine establishment. Free? Oh
                ladies, cover your ears. No... not free. Look, hey... this is
                a squeaky clean, highly profitable (at least potentially),
                local institution. Look the bottom with favor by the chamber
                of commerce, better business bureau at three-hundred and twelve
                thousand dollars, it's a steal.</p>
            </div>
          </article>

          <article className="tutorial-article-all">
            <a href="tutIndividual.html"><h3>Comandos básicos de linux</h3></a>
            <div className="tuto-content">
              <figure className="tuto-image">
                <a href="tutIndividual.html"><img className="img-responsive" src="img/tuto.png" alt="tutorial" /></a>
              </figure>
              <p className="tuto-text">
                What? What do you want?! No. Don't even tell me you're hungry.
                Don't go there. Hahaha! Are you mad doggin' them, Tio? What,
                you don't like them? One ding. That means yes. Tio don't like
                you. Why don't you like them, Tio? You don't trust them? Why
                don't you trust them, Tio? BULLSHIT! MY TIO DOES NOT LIE!
              </p>
            </div>
          </article>
        </div>
      </section>

    );
  }
}
      TutorialesComponent.displayName = 'TutorialesComponent';

      // Uncomment properties you need
      // HomeComponent.propTypes = {};
      // HomeComponent.defaultProps = {};

      export default TutorialesComponent;
