'use strict';

import React from 'react';

require('styles//Home.css');
require('styles/style.css');


class PregIndComponent extends React.Component {
  render() {
    return (

      <section className="center-container">
        <div className="ask-container">
          <h3>Cómo le hago para pasar programación web</h3>
          <div className="answer-content">
            <p className="ask-text">
              Cat ipsum dolor sit amet, cat snacks massacre a bird in the living
              room and then look like the cutest and most innocent animal on the
              planet. Hunt anything that moves stare at ceiling mrow or cough
              furball purr for no reason. Lay on arms while you're using the
              keyboard purr roll on the floor purring your whiskers off chase
              red laser dot and have secret plans wake up wander around the
              house making large amounts of noise jump on top of your human's
              bed and fall asleep again lie in the sink all day. Ears back wide
              eyed friends are not food. Flop over. Meow lay on arms while
              you're using the keyboard. Purr attack dog, run away and pretend
              to be victim or pee in the shoe if it smells like fish eat as
              much as you wish or scamper, or hunt by meowing loudly at 5am
              next to human slave food dispenser lick butt.
            </p>
            <span className="lang-tag php-tag">PHP</span>
            <span className="lang-tag html-tag">HTML</span>
            <span className="lang-tag css-tag">CSS</span>
          </div>
        </div>
        <div className="answer-content">
          <table>
            <tbody>
              <tr>
                <td>
                  <span itemprop="vote-count" className="vote-count">-5</span>
                </td>
                <td>
                  <p className="answer-text">
                    The game has changed. The word is out. And you... are a killer.
                    Apparently it's all over town. Somebody crossed you, you got angry,
                    you crushed their skull with an ATM machine. Who cares! Just as
                    long as it's our competitors who believe it and not the police.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <form className="admin-section" action="add_tuto.html" method="post">
            <input className="btn btn-danger btn-admin" type="button" name="eliminar" value="Eliminar Comentario"/>
            <input className="btn btn-warning btn-admin"type="submit" name="editar" value="Editar Comentario"/>
          </form>
        </div>
        <div className="form-element-ask">
          <label for="comentario">Responder</label>
          <textarea name="comentario" id="comentario" rows="8" cols="10" required=""></textarea>
          <div className="form-btn">
            <input className="btn btn-success" type="submit" name="responder" value="Responder"/>
          </div>
        </div>
        <form className="admin-section" action="add_tuto.html" method="post">
          <input className="btn btn-danger btn-admin" type="button" name="eliminar" value="Eliminar Pregunta"/>
          <input className="btn btn-warning btn-admin"type="submit" name="editar" value="Editar Pregunta"/>
        </form>
      </section>

    );
  }
}
      PregIndComponent.displayName = 'PregIndComponent';

      // Uncomment properties you need
      // HomeComponent.propTypes = {};
      // HomeComponent.defaultProps = {};

      export default PregIndComponent;
