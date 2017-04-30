'use strict';

import React from 'react';

require('styles//Home.css');
require('styles/style.css');


class FaqComponent extends React.Component {
  render() {
    return (
          <section className="center-container">
            <div className="">

              <div className="faq-container">
                <article className="article-block">
                  <h2>PREGUNTAS FRECUENTES</h2><br/><br/>
                  <h3>Lorem ipsum</h3>
                  <p>
                    Spicy jalapeno bacon ipsum dolor amet andouille doner tri-tip, ball tip t-bone tongue
                    ribeye pork loin tenderloin kielbasa shank frankfurter pork chop filet mignon spare ribs.
                    Strip steak alcatra corned beef andouille short ribs. Leberkas ground round drumstick
                    tongue ball tip bresaola shank sausage short ribs. Shank doner spare ribs, jerky pork
                    chop pig venison pancetta turducken ribeye beef ribs salami pork belly ground round.
                    Short loin ham hock pastrami, sausage short ribs brisket fatback.</p>
                    <h3>Lorem ipsum</h3>
                    <p>
                    Tail shank chicken ball tip, biltong porchetta pork sausage turducken brisket landjaeger
                    picanha pancetta. Sausage sirloin picanha filet mignon brisket, boudin venison shankle
                    porchetta. Tongue kevin short ribs venison. Bresaola shoulder meatball filet mignon
                    prosciutto pancetta strip steak beef pork belly pig.</p>
                    <h3>Lorem ipsum</h3>
                    <p>
                    Pork chop landjaeger fatback leberkas pancetta. Brisket alcatra ham fatback turkey beef
                    ribs hamburger pastrami pancetta prosciutto shankle pork chop sausage. Capicola rump
                    swine pork, beef ribs ham hock tail short loin turducken pig short ribs. Alcatra ham
                    jowl boudin.</p>
                    <h3>Lorem ipsum</h3>
                    <p>
                    Kevin meatball prosciutto, andouille brisket swine pastrami pork belly cow alcatra.
                    Capicola andouille burgdoggen swine short loin meatball porchetta turducken. Beef
                    hamburger pork chop tri-tip. T-bone pork kielbasa pork belly burgdoggen frankfurter
                    salami. Shoulder porchetta biltong cupim, short ribs doner meatloaf corned beef boudin
                    meatball brisket.</p>
                    <h3>Lorem ipsum</h3>
                    <p>
                    Ball tip sausage shoulder pork loin, cow tenderloin ground round pork chop. Brisket
                    ground round shank ball tip, ham hock shoulder burgdoggen. Shank pastrami pork belly
                    corned beef, alcatra turducken ball tip tongue hamburger meatloaf rump doner chicken.
                    Salami tenderloin ham ribeye jerky tri-tip meatloaf. Alcatra turkey beef capicola doner
                    pig cow fatback prosciutto tail beef ribs. Hamburger pastrami burgdoggen leberkas
                    capicola jerky picanha swine. Meatloaf prosciutto burgdoggen shoulder chicken picanha,
                    ham andouille pig spare ribs corned beef rump brisket.</p>
                    <h3>Lorem ipsum</h3>
                    <p>
                    Ham beef ribs porchetta meatball kielbasa chicken picanha corned beef. Sausage leberkas
                    boudin rump hamburger pork. Tenderloin shank bresaola turducken alcatra ground round.
                    Bresaola pig shankle boudin beef ribs. Hamburger pork salami meatloaf landjaeger swine.
                    Pork chicken kielbasa pig, turkey meatball hamburger sirloin ham hock sausage.</p>

                  <small>Unnamed Team</small>
                </article>
              </div>
            </div>
          </section>
    );
  }
}


FaqComponent.displayName = 'FaqComponent';

// Uncomment properties you need
// HomeComponent.propTypes = {};
// HomeComponent.defaultProps = {};

export default FaqComponent;
