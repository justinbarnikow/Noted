import React, { useState } from 'react';

function Card(props) {

    const [isEditingTitle, setIsEditingTitle] = useState(false)
    const [isEditingContent, setIsEditingContent] = useState(false)

  return (
      <div className='Card'>
          {
              isEditingTitle ?
              <form onSubmit={(e) => {
                props.editCardTitle(e, props.id)
                setIsEditingTitle(false)
              }}>
                  <input type='text' id='cardTitle' name='cardTitle' defaultValue={props.title} />
              </form> :
              <h3 onClick={() => setIsEditingTitle(true)}>{props.title}</h3>
          }
          {
              isEditingContent ?
              <form onSubmit={(e) => {
                  props.editCardContent(e, props.id)
                  setIsEditingContent(false)
              }}>
                  <textarea id='cardContent' name='cardContent' defaultValue={props.content} />
                  <button type='submit'>Go</button>
              </form> :
              <p onClick={() => setIsEditingContent(true)}>{props.content}</p>
          }
          <button type='button' onClick={() => props.deleteCard(props.id)}>
              Delete Card
          </button>
      </div>
  );
}

export default Card;
