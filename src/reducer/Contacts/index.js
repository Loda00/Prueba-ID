const defaultState = {
  contacts: [
    {
      name: 'Diego',
      id: 1,
    },
    {
      name: 'Doffy',
      id: 2,
    },
    {
      name: 'Gregorio',
      id: 3,
    }
  ]
}

export default function contacts(state = defaultState, action) {
  switch (action.type) {
    case 'TEST_ID_CONTACTS':
      return action.payload
    default:
      return state
  }
}