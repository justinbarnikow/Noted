import React, { useState } from 'react';
import Card from './Card';

function List(props) {

  const [isEditing, setIsEditing] = useState(false)

  if(props.cards) {
  return (
      <section className='List'>
          <header>
              {
                  isEditing ?
                    <form onSubmit={(e) => {
                        props.editListTitle(e, props.id)
                        setIsEditing(false)
                    }}>
                        <input type='text' defaultValue={props.header} id='listTitle' name='listTitle' />
                    </form> :
                    <h2 onClick={() => setIsEditing(true)}>{props.header}</h2>
              }
          </header>
          <div className='List-cards'>
              <form className='new-card-form' onSubmit={(e) => props.addCard(e, props.id)}>
                <input type='text' name='cardTitle' id='cardTitle' required />
                <button type='submit'>
                    Add Card
                </button>
              </form>
              {props.cards.map(card => (
                  <Card 
                    key={card.id}
                    id={card.id}
                    content={card.content}
                    title={card.title}
                    deleteCard={props.deleteCard}
                    editCardTitle={props.editCardTitle}
                    editCardContent={props.editCardContent}
                  />
              ))}
          </div>
      </section>
  );
}}

export default List;
