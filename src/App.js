import React, { Component } from 'react';
import List from './comps/List';
import store from './store';
import './App.css'
import { v4 as uuidv4 } from 'uuid'

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

export default class App extends Component {

  state = {
    store: store
  }

  handleNewCard = (e, listId) => {
    e.preventDefault()
    const id = uuidv4()
    const cardName = e.target.cardTitle.value
    const newCard = {
      id,
      title: `${cardName}`,
      content: 'lorem ipsum 2',
    }
    const newLists = this.state.store.lists.map(list => {
      if(list.id === listId) {
        return {
          ...list, 
          cardIds: [...list.cardIds, newCard.id]
        }
      }
      return list
    })
    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
      }
    })
    Array.from(document.querySelectorAll('input')).forEach(
      input => (input.value = "")
    );
  }

  handleNewList = () => {
    const {lists, allCards} = this.state.store
    const id = uuidv4()
    const newList = {
      id,
      header: 'New List',
      cardIds: []
    }
    this.setState({
      store: {
        lists: [...lists, newList],
        allCards:allCards
      }
    })
  }

  handleDeleteCard = (cardId) => {
    const { lists, allCards } = this.state.store;
    const newLists = lists.map(list => ({
      ...list, 
      cardIds: list.cardIds.filter(id => id !== cardId)
    }))

    const newCards = omit(allCards, cardId)
    this.setState({
      store: {
        lists: newLists,
        allCards: newCards
      }
    })
  }

  handleDeleteList = (listId) => {
    const { lists, allCards } = this.state.store;
    const newLists = lists.filter(function(list) {
      return list.id !== listId
    })
    this.setState({
      store: {
        lists: newLists,
        allCards: allCards
      }
    })
  }

  handleClearAll = () => {
    this.setState({ 
      store: {
        lists: [],
        allCards: {}
      }
    })
  }

  handleEditListTitle = (e, listId) => {
    e.preventDefault()
    const { lists, allCards } = this.state.store;
    const newLists = lists.map(list => {
      if(list.id === listId) {
        return {...list, header: e.target.listTitle.value}
      }
      return list
    })
    this.setState({
      store: {
        lists: newLists,
        allCards: allCards
      }
    })
  }

  handleEditCardTitle = (e, cardId) => {
    e.preventDefault()
    const allCards = this.state.store.allCards
    Object.entries(allCards).forEach((entry) => {
      const [key, value] = entry;
      if (key === cardId) {
        value.title = e.target.cardTitle.value
      }
    })
    this.setState({
      store: {
        lists: this.state.store.lists,
        allCards: this.state.store.allCards
      }
    })
  }

  handleEditCardContent = (e, cardId) => {
    e.preventDefault();
    const allCards = this.state.store.allCards
    Object.entries(allCards).forEach((entry) => {
      const [key, value] = entry;
      if (key === cardId) {
        value.content = e.target.cardContent.value
      }
    })
    this.setState({
      store: {
        lists: this.state.store.lists,
        allCards: this.state.store.allCards
      }
    })
  }

  render() {
    const {store} = this.state
    return (
      <main className='App'>
        <header>
          <h1>Noted</h1>
          <h2>the only list app you need</h2>
        </header>
        <div className='button_area'>
          <button type='button' onClick={() => this.handleNewList()}>
            New List
          </button>
          <button type='button' onClick={() => this.handleClearAll()}>
            Clear All
          </button>
        </div>
        <div className='App-list'>
          {store.lists.map(list => (
              <List 
                key={list.id}
                header={list.header}
                id={list.id}
                cards={list.cardIds.map(id => store.allCards[id])}
                addCard={this.handleNewCard}
                deleteCard={this.handleDeleteCard}
                deleteList={this.handleDeleteList}
                editListTitle={this.handleEditListTitle}
                editCardTitle={this.handleEditCardTitle}
                editCardContent={this.handleEditCardContent}
              />
          ))}
        </div>
      </main>
      );
  }
}
