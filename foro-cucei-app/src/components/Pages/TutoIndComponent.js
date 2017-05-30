'use strict';

import React from 'react';

require('styles//Home.css');
require('styles/style.css');


class TutoIndComponent extends React.Component {
  render() {
    return (

      <section className="center-container">
        <div className="tuto-container">
          <h3>Un tutorial para governarlos a todos</h3>
          <div className="tuto-content-all">
            <p className="tuto-text">
              Zombies reversus ab inferno, nam malum cerebro. De carne animata
              corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi
              undead dictum mauris. Hi mortuis soulless creaturas, imo monstra
              adventus vultus comedat cerebella viventium. Qui offenderit rapto,
              terribilem incessu. The voodoo sacerdos suscitat mortuos comedere
              carnem. Search for solum oculi eorum defunctis cerebro. Nescio an
              Undead zombies. Sicut malus movie horror.

              Cum horribilem resurgere de sepulcris creaturis, sicut de iride
              et serpens. Pestilentia, ipsa screams. Pestilentia est haec
              ambulabat mortuos. Sicut malus voodoo. Aenean a dolor vulnerum
              aperire accedunt, mortui iam vivam. Qui tardius moveri, sed in
              magna copia sint terribiles legionis. Alii missing oculis aliorum
              sicut serpere crabs nostram. Putridi odores aere implent.

              Tremor est vivos magna. Expansis ulnis video missing carnem armis
              caeruleum in locis. A morbo amarus in auras. Nihil horum sagittis
              tincidunt, gelida portenta. The unleashed virus est, et iam mortui
              ambulabunt super terram. Souless mortuum oculos attonitos back
              zombies. An hoc incipere Clairvius Narcisse, an ante? Is bello
              mundi z?
            </p>
          </div>
        </div>

        <div className="tuto-res">
          <article className="res">
            <strong><span className="user-name-res">John Doe</span></strong>
            <table className="table">
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
          </article>
          <form className="admin-section" action="add_tuto.html" method="post">
            <input className="btn btn-danger btn-admin" type="button" name="eliminar" value="Eliminar Comentario"/>
            <input className="btn btn-warning btn-admin"type="submit" name="editar" value="Editar Comentario"/>
          </form>
        </div>

        <div className="tuto-res">
          <article className="res">
            <strong><span className="user-name-res">Jane Doe</span></strong>
            <table className="table">
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
          </article>
          <form className="admin-section" action="add_tuto.html" method="post">
            <input className="btn btn-danger btn-admin" type="button" name="eliminar" value="Eliminar Comentario"/>
            <input className="btn btn-warning btn-admin"type="submit" name="editar" value="Editar Comentario"/>
          </form>
        </div>

        <div className="form-element-tuto">
          <label for="comentario">Comentario</label>
          <textarea name="comentario" id="comentario" rows="8" cols="10" required=""></textarea>
          <div className="form-btn">
            <input className="btn btn-success" type="submit" name="publicar" value="Publicar"/>
          </div>
        </div>
        <form className="admin-section" action="add_tuto.html" method="post">
          <input className="btn btn-danger btn-admin" type="button" name="eliminar" value="Eliminar Tutorial"/>
          <input className="btn btn-warning btn-admin"type="submit" name="editar" value="Editar Tutorial"/>
        </form>
      </section>

    );
  }
}
      TutoIndComponent.displayName = 'TutoIndComponent';

      // Uncomment properties you need
      // HomeComponent.propTypes = {};
      // HomeComponent.defaultProps = {};

      export default TutoIndComponent;
