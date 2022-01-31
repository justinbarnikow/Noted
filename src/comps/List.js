import React from 'react';
import Card from './Card';

function List(props) {
  if(props.cards) {
  return (
      <section className='List'>
          <header>
              <h2>{props.header}</h2>
          </header>
          <div className='List-cards'>
              <form className='new-card-form' onSubmit={(e) => props.addCard(e, props.id)}>
                <input type='text' name='cardTitle' id='cardTitle' required />
                <button type='submit'>
                    Add Random Card
                </button>
              </form>
              {props.cards.map(card => (
                  <Card 
                    key={card.id}
                    id={card.id}
                    content={card.content}
                    title={card.title}
                    deleteCard={props.deleteCard}
                  />
              ))}
          </div>
      </section>
  );
}}

export default List;
