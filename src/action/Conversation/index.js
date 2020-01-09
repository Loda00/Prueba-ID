const CONVERSATION = 'TEST_ID_CONVERSATION'

export function setConversation(value) {
  return {
    type: CONVERSATION,
    payload: value
  }
}