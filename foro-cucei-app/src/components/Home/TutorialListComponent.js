'use strict';

import React from 'react';

require('styles//home/TutorialList.css');

class TutorialListItem extends React.Component {
  render() {
    const tutorial = this.props.tutorial;
    return(
      <article className='tutorial-article'>
        <h3>{tutorial.title}</h3>
        <div className='tuto-content'>
          <figure className='tuto-image'>
            <img className='img-responsive' src={'images/tuto.png'} alt='tutorial' />
          </figure>
          <p className='tuto-text'>
            {tutorial.description}
          </p>
        </div>
      </article>
    );
  }
}

class TutorialListComponent extends React.Component {
  
  getTutorials() {
    //Instead of static data, here we should fetch data from server.
    let {limit} = this.props;
    let tutorials  = [
      {
        title: 'Como instalar LAMP y no morir en el intento',
        description: `
              Look, just because I don't be givin' no man a foot massage don't make
              it right for Marsellus to throw Antwone into a glass motherfuckin' house,
              fuckin' up the way the nigger talks. Motherfucker do that shit to me,
              he better paralyze my ass, 'cause I'll kill the motherfucker, know
              what I'm sayin'?`
      },
      {
        title: 'Como armar una peda con 300 para 20 personas',
        description: `
              Normally, both your asses would be dead as fucking fried chicken,
              but you happen to pull this shit while I'm in a transitional
              period so I don't wanna kill you, I wanna help you. But I can't
              give you this case, it don't belong to me. Besides, I've already
              been through too much shit this morning over this case to hand it
              over to your dumb ass.`
      },
      {
        title: 'Cucei sin buitres no es cucei',
        description: `
              Your bones don't break, mine do. That's clear. Your cells react
              to bacteria and viruses differently than mine. You don't get
              sick, I do. That's also clear. But for some reason, you and I
              react the exact same way to water. We swallow it too fast, we
              choke. We get some in our lungs, we drown. However unreal it
              may seem, we are connected, you and I. We're on the same curve,
              just on opposite ends.`
      }
    ];
    //Wrapping data to an array of TutorialListItemComponent
    let result = tutorials.map((t, i) => {
      return <TutorialListItem tutorial={t} key={'tutorial'+i}/>
    });
    if(limit && limit > 0 && limit < result.length) {
      return result.slice(0, limit);
    } else {
      return result;
    }
  }
  render() {
    const tutorials = this.getTutorials();
    return (
      <div className='tuto-container'>
        <h2>ULTIMOS TUTORIALES</h2>
        {tutorials}
      </div>
    );
  }
}

TutorialListComponent.displayName = 'HomeTutorialListComponent';

// Uncomment properties you need
// TutorialListComponent.propTypes = {};
// TutorialListComponent.defaultProps = {};

export default TutorialListComponent;
