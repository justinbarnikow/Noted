const store = {
    lists: [
      {
        id: '1',
        header: 'To-do',
        cardIds: [ 'a', 'b'],
      },
      {
        id: '2',
        header: 'Cleaning',
        cardIds: ['b', 'c', 'd', 'f', 'h'],
      },
      {
        id: '3',
        header: 'Groceries',
        cardIds: ['b', 'd', 'f', 'g', 'h', 'i', 'j', 'k' ],
      },
      {
        id: '4',
        header: 'Appointments',
        cardIds: ['e', 'l', 'm' ],
      },
      {
        id: '5',
        header: 'New List',
        cardIds: ['d']
      }
    ],
    allCards: {
      'a': { id: 'a', title: 'Make a list app', content: 'Edit the titles and content with a double-click!' },
      'b': { id: 'b', title: 'Repetitive Card', content: 'This card is in more than one list. What happens when you delete me?' },
      'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
      'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
      'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
      'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
      'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
      'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
      'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
      'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
      'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
      'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
      'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
    },
  }

  export default store