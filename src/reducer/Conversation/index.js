const defaultState = {
  contacts: []
}

export default function contacts(state = defaultState, action) {
  switch (action.type) {
    case 'TEST_ID_CONVERSATION':
      return action.payload
    default:
      return state
  }
}