import React, { useState } from 'react';
import {FaStar, FaTrashAlt} from 'react-icons/fa'
import {AiOutlineStar} from 'react-icons/ai'
import {VscCheck, VscChromeClose} from 'react-icons/vsc'
import '../Style/Card.css'

function Card(props) {

    const [isEditingTitle, setIsEditingTitle] = useState(false)
    const [isEditingContent, setIsEditingContent] = useState(false)
    const [isHighlighted, setIsHighlighted] = useState(false)

  return (
      <div className='Card'>
          <div className='Card_buttons'>
            {
                isHighlighted ?
                <span style={{ color: 'rgb(255, 132, 0)'}}>
                    <FaStar className='star_highlighted' onClick={() => setIsHighlighted(false)}/>
                </span> :
                <span>
                    <AiOutlineStar className='star_lowlighted' onClick={() => setIsHighlighted(true)}/>
                </span>
            }
                <FaTrashAlt className='trash_button card_trash'
                    onClick={() => props.deleteCard(props.id)}
                />
          </div>

          {
              isEditingTitle ?
              <form onSubmit={(e) => {
                props.editCardTitle(e, props.id)
                setIsEditingTitle(false)
              }} className='Card_titleForm'>
                  <input type='text' id='cardTitle' name='cardTitle' defaultValue={props.title} />
                  <button type='submit'>
                    <VscCheck className='listCheck' />
                  </button>
                  <button><VscChromeClose onClick={() => setIsEditingTitle(false)} className='listCancel' /></button>
              </form> :
              <h3 onDoubleClick={() => setIsEditingTitle(true)} className='Card_title'>
                  {props.title}
              </h3>
          }

          {
              isEditingContent ?
              <form onSubmit={(e) => {
                  props.editCardContent(e, props.id)
                  setIsEditingContent(false)
              }} className='Card_contentForm'>
                  <textarea id='cardContent' name='cardContent' defaultValue={props.content} />
                  <button type='submit'>
                    <VscCheck className='listCheck' />
                  </button>
                  <button type='button'>
                      <VscChromeClose onClick={() => setIsEditingContent(false)} 
                      className='listCancel' />
                  </button>
              </form> :
              <p className='Card_content'
              onDoubleClick={() => setIsEditingContent(true)}>
                  {props.content}
              </p>
          }
      </div>
  );
}

export default Card;
