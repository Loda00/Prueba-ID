const defaultState = {
  data: [
    {
      1:[
        {
          user: false,
          message: 'Holaaaaa xddd',
        }
      ],
      2:[
        {
          user: false,
          message: 'Holiiii'
        }
      ],
      3:[
        {
          user: false,
          message: 'Ste men'
        }
      ]
    }
  ]
}

// defaultState.data[0][1].pu

export default function dialogs(state = defaultState, action) {
  switch (action.type) {
    case 'TEST_ID_DIALOG':
      return action.payload
    default:
      return state
  }
}