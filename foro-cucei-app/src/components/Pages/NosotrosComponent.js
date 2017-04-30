'use strict';

import React from 'react';

require('styles//Home.css');
require('styles/style.css');


class NosotrosComponent extends React.Component {
  render() {
    return (

      <section className="center-container">
        <div className="">

          <div className="team-container">
            <h2>EQUIPO FORO CUCEI</h2>
            <article className="member-block">
              <i className="fa fa-user fa-5x" aria-hidden="true"></i>
              <div className="member-content">
                <h4>Carlos</h4>
                <p className="member-text">
                  Trimmed groucho marx groucho-a-like admiral. Leader of men felis burt reynolds,
                  felis dick dastardly burt reynolds handsome knavish rogue don’t panic alpha
                  trion leader of men.Trimmed groucho marx groucho-a-like admiralurt reynolds
                  handsome knavish rogue.</p>
              </div>
            </article>

            <article className="member-block">
              <i className="fa fa-user fa-5x" aria-hidden="true"></i>
              <div className="member-content">
                <h4>David</h4>
                <p className="member-text">
                  Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.
                  Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm
                  hempen halter furl. Swab barque interloper chantey doubloon starboard grog
                  black jack gangway rutters.</p>
              </div>
            </article>

            <article className="member-block">
              <i className="fa fa-user fa-5x" aria-hidden="true"></i>
              <div className="member-content">
                <h4>Miguel</h4>
                <p className="member-text">
                  Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
                  De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo
                  vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris
                  ipsum reversus ab viral inferno, nam rick.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

    );
  }
}
      NosotrosComponent.displayName = 'NosotrosComponent';

      // Uncomment properties you need
      // HomeComponent.propTypes = {};
      // HomeComponent.defaultProps = {};

      export default NosotrosComponent;
