import React, { useState } from 'react';
import Card from './Card';
import {FaEye, FaTrashAlt} from 'react-icons/fa'
import {VscCheck, VscChromeClose} from 'react-icons/vsc'
import '../Style/List.css'

function List(props) {

  const [isEditing, setIsEditing] = useState(false)
  const [isAddCardShowing, setIsAddCardShowing] = useState(false)
  const [isHighlighted, setIsHighlighted] = useState(false)

  if(props.cards) {
  return (
      <section className='List'>
          <div className='List_buttons'>
            {
                isHighlighted ?
                    <FaEye className='eye_highlighted' style={{ opacity: '1', color: "rgb(0, 128, 255)"}}
                        onClick={() => setIsHighlighted(false)}
                    /> :
                    <FaEye className='eye_highlighted' style={{ opacity: '.3'}} 
                        onClick={() => setIsHighlighted(true)}
                    />
            }
            <button type='button' className='trash_button list_trash'
                onClick={() => props.deleteList(props.id)}>
                <FaTrashAlt />
            </button>
          </div>
          <div>
              {
                  isEditing ?
                    <form onSubmit={(e) => {
                        props.editListTitle(e, props.id)
                        setIsEditing(false)
                    }} className='List_titleForm'>
                        <input type='text' defaultValue={props.header} id='listTitle' name='listTitle' />
                        <button type='submit'>
                            <VscCheck className='listCheck' />
                        </button>
                        <button><VscChromeClose onClick={() => setIsEditing(false)} className='listCancel' /></button>
                    </form> :
                    <h2 onDoubleClick={() => setIsEditing(true)} className='List_title'>
                        {props.header}
                    </h2>
              }
          </div>

          <div className='List-cards'>
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
          {
                  isAddCardShowing ?
                    <div className='addCard_Area'>
                        <form className='new-card-form' onSubmit={(e) => props.addCard(e, props.id)}>
                            <input type='text' name='addCardTitle' id='addCardTitle'
                               placeholder='Enter a title for this card.. ' required 
                             />
                            <button type='submit' className='addCard_button listCheck'>
                                <VscCheck />
                            </button>
                            <button className='addCard_cancel listCancel' type='button'
                                 onClick={() => setIsAddCardShowing(false)}>
                                <VscChromeClose />
                            </button>
                        </form>
                    </div> :
                    <div onClick={() => setIsAddCardShowing(true)} className='addCard_dropdown'>
                        <span className='addCard_dropButton'>Add Card</span>
                    </div>
              }
      </section>
  );
}}

export default List;
