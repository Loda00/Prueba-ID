const CONTACTS = 'TEST_ID_CONTACTS'

export function setContacts(value) {
  return {
    type: CONTACTS,
    payload: value
  }
}