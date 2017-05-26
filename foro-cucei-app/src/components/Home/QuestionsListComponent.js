'use strict';

import React from 'react';

require('styles//home/QuestionsList.css');

class QuestionListItemComponent extends React.Component {
  getCategoriesIcons(categories) {
    if(categories && Array.isArray(categories) && categories.length > 0) {
      return categories.map((c, i) => {
        switch(c) {
          case 'C#':
            return <span className='lang-tag csharp-tag' key={i}>C#</span>;
          case 'C++':
            return <span className='lang-tag c-tag' key={i}>C++</span>;
          case 'PHP':
            return <span className='lang-tag php-tag' key={i}>PHP</span>;
          case 'HTML':
            return <span className='lang-tag html-tag' key={i}>HTML</span>;
          case 'CSS':
            return <span className='lang-tag css-tag' key={i}>CSS</span>;
          case 'PYTHON':
            return <span className='lang-tag python-tag' key={i}>PYTHON</span>;
          case 'JAVA':
            return <span className='lang-tag java-tag' key={i}>JAVA</span>
        }
      })
    } else {
      return <span></span>;
    }
  }
  render() {
    const question = this.props.question;
    const questionCategories = this.getCategoriesIcons(question.categories);
    return(
      <article className='ask-article'>
        <h3>{question.title}</h3>
        <div className='ask-content'>
          <figure className='ask-image'>
            <img className='img-responsive' src={'images/ask.png'} alt='tutorial' />
          </figure>
          <p className='ask-text'>
            {question.description}
          </p>
        </div>
        {questionCategories}
      </article>
    );
  }
}

class QuestionsListComponent extends React.Component {
  getQuestions() {
    let questions = [
      {
        title: 'Como funciona flexbox?',
        description: `
              Two words: nail, salon. It's perfect for money laundering, it's a
              high-volume, cash-preferred business with a discreet workforce.
              Nobody does mista-me-know-nothing better than Mrs. Mukjayaporn
              and her gals.`,
        categories: ['C#']
      },
      {
        title: 'Problema con printf c++',
        description: `
              Drum roll, please. Wait for it. Lazer tag. Lazer tag! 7,000 square
              feet of rollicking fun in the heart of northern Bernalillo County!
              It adds up perfectly. Walt's a scientist, scientists love lazers.
              Plus, they got bumper boats, so...`,
        categories: ['C++']
      },
      {
        title: 'De donde saco el proyecto para proga web con Michelle?',
        description: `
              Si llego a este punto no crea que lo copiamos, pase todo el fin
              haciendo esto, es mas, hasta puntos extras merecemos hahaha;
              Aqui iria una parte del texto de la pregunta, con un link a la
              pregunta completa y sus respectivas respuestas.`,
        categories: ['PHP','HTML','CSS']
      },
      {
        title: 'Como hago una instancia?',
        description: `
              This is glass grade. I mean, you got... Jesus, you got crystals
              in here 2 inches, 3 inches long. This is pure glass. You're a
              damn artist! This is art, Mr. White! Yeah, that's the thing,
              y'know? Your scumbag brother-in-law took my rainy day fund.
              Oh yeah. And tell that douche bag brother-in-law of yours to
              go towards the light.`,
        categories: ['PYTHON']
      },
      {
        title: 'Heil Hitler Bitch!',
        description: `
              What? Come on! Man, you're smart. You made poison out of beans,
              yo. Look, we got, we got an entire lab right here. Alright? How
              about you pick some of these chemicals and mix up some rocket
              fuel? That way you could just send up a signal flare. Or you
              make some kind of robot to get us help, or a homing device,
              or build a new battery, or... wait. No. What if we just take
              some stuff off of the RV and build it into something completely
              different? You know, like a... Like a dune buggy. That way, we
              can just dune buggy or... What? Hey? What is it? What?`,
        categories: ['JAVA']
      }
    ];

    return questions.map((q, i) => {
      return <QuestionListItemComponent question={q} key={'question'+i}/>
    });
  }
  render() {
    let questions = this.getQuestions();
    return (
      <div className='ask-container'>
        <h2>ULTIMAS PREGUNTAS</h2>
        {questions}
      </div>
    );
  }
}

QuestionsListComponent.displayName = 'HomeQuestionsListComponent';

// Uncomment properties you need
// QuestionsListComponent.propTypes = {};
// QuestionsListComponent.defaultProps = {};

export default QuestionsListComponent;
