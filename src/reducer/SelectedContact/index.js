export default function message(state = {}, action) {
  switch (action.type) {
    case 'TEST_ID_SELECTED_CONTACT':
      return action.payload
    default:
      return state
  }
}