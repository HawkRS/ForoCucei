'use strict';

import React from 'react';
import config from 'config';

require('styles//Home.css');
require('styles/style.css');

// import CategoriesSideBarComponent from '../SideBar/CategoriesSideBarComponent';
import HeaderComponent from '../Helpers/HeaderComponent';
import FooterComponent from '../Helpers/FooterComponent';
import TutorialListComponent from './TutorialListComponent';
import QuestionsListComponent from './QuestionsListComponent';

import User from '../../models/User';

class HomeComponent extends React.Component {
  constructor() {
        super();
  }

  sendAccount() {
    let user = new User();
    user.create({
      name: 'hola esto se envio con jquery!!!!'
    }).then((data) => {
      alert('this is the data!!!!'+JSON.stringify(data));
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    const { content } = this.props;
    const bienvenida = (<div className='bienvenida'>
                <article className='article-block'>
                  <h1>Bienvenidos {config.appEnv}</h1>
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
              </div>);
    return (
      <div className='root'>
        <HeaderComponent />
        <main className='main-container'>
          <section className='center-container'>
            {content ? '': bienvenida}
            <div className=''>
              {content || <div><TutorialListComponent limit={3}/><QuestionsListComponent limit={3}/></div>}
            </div>
          </section>
        </main>
        <FooterComponent />
      </div>
    );
  }
}

HomeComponent.displayName = 'HomeComponent';

// Uncomment properties you need
// HomeComponent.propTypes = {};
// HomeComponent.defaultProps = {};

export default HomeComponent;
