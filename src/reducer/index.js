import { combineReducers } from 'redux'

import Message from './Message'
import Contacts from './Contacts'
import User from './User'
import Dialogs from './Dialogs'
import SelectedContact from './SelectedContact'

const reducers = combineReducers({
  Message,
  Contacts,
  User,
  Dialogs,
  SelectedContact
})

export default reducers