const SELECTED_CONTACT = 'TEST_ID_SELECTED_CONTACT'

export function setSelectedContact(value) {
  return {
    type: SELECTED_CONTACT,
    payload: value
  }
}