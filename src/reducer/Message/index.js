const DataFake = [
  {
    id: 1,
    contact: 'Diego',
    lastMessage: 'Holaaaaa xddd',
    hour: '18:10',
  },
  {
    id: 2,
    contact: 'Doffy',
    lastMessage: 'Holiiii',
    hour: '15:43',
  },
  {
    id: 3,
    contact: 'Gregorio',
    lastMessage: 'Ste men',
    hour: '16:24',
  }
]

const defaultState = {
  message: DataFake
}

export default function message(state = defaultState, action) {
  switch (action.type) {
    case 'TEST_ID_MESSAGE':
      return action.payload
    default:
      return state
  }
}