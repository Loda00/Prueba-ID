const DIALOG = 'TEST_ID_MESSAGE'

export function newMessage(value) {
  return {
    type: DIALOG,
    payload: value
  }
}