const DIALOG = 'TEST_ID_DIALOG'

export function setDialog(value) {
  return {
    type: DIALOG,
    payload: value
  }
}