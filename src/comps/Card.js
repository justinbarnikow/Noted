import React, { useState } from 'react';
import {FaStar, FaTrashAlt} from 'react-icons/fa'

function Card(props) {

    const [isEditingTitle, setIsEditingTitle] = useState(false)
    const [isEditingContent, setIsEditingContent] = useState(false)
    const [isHighlighted, setIsHighlighted] = useState(false)

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
              isHighlighted ?
              <span className='star_highlighted' style={{ color: 'yellow'}}>
                  <FaStar onClick={() => setIsHighlighted(false)}/>
              </span> :
              <span className='star_highlighted'>
                <FaStar onClick={() => setIsHighlighted(true)}/>
            </span>
          }
          <button type='button' onClick={() => props.deleteCard(props.id)}>
              <FaTrashAlt />
          </button>
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
      </div>
  );
}

export default Card;
