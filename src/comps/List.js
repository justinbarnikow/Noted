import React, { useState } from 'react';
import Card from './Card';
import {FaEye, FaTrashAlt} from 'react-icons/fa'

function List(props) {

  const [isEditing, setIsEditing] = useState(false)
  const [isAddCardShowing, setIsAddCardShowing] = useState(false)
  const [isHighlighted, setIsHighlighted] = useState(false)

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
          {
              isHighlighted ?
              <span className='star_highlighted' style={{ opacity: '1'}}>
                  <FaEye onClick={() => setIsHighlighted(false)}/>
              </span> :
              <span className='star_highlighted' style={{ opacity: '.3'}}>
                <FaEye onClick={() => setIsHighlighted(true)}/>
            </span>
          }
          <button type='button' onClick={() => props.deleteList(props.id)}>
              <FaTrashAlt />
          </button>

          <div className='List-cards'>
              {
                  isAddCardShowing ?
                    <div className='addCard_Area'>
                        <button onClick={() => setIsAddCardShowing(false)} className='addCard_dropdown'>
                            ^
                        </button>
                        <form className='new-card-form' onSubmit={(e) => props.addCard(e, props.id)}>
                            <input type='text' name='cardTitle' id='cardTitle' required />
                            <button type='submit'>
                                Add Card
                            </button>
                        </form>
                    </div> :
                    <button onClick={() => setIsAddCardShowing(true)} className='addCard_dropdown'>
                        v
                    </button>
              }

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
