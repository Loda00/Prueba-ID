const defaultState = {
  user: {
    name: 'Pikachu',
    id: 10000,
  }
}

export default function message(state = defaultState, action) {
  switch (action.type) {
    case 'TEST_ID_USER':
      return action.payload
    default:
      return state
  }
}