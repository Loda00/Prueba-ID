import React from 'react'
import { setSelectedContact } from 'action/SelectedContact'
import { setContacts } from 'action/Contacts'
import { newMessage } from 'action/Message'
import { setDialog } from 'action/Dialog'
import { withRouter } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import { cloneDeep } from 'lodash'
import { Container, BoxPhoto, Photo, Detail, DetailOptions } from './style'
import { connect } from 'react-redux'

const BoxMessage = (props) => {
  const {
    contact,
    setSelectedContact,
    listContacts,
    listMessages,
    history,
    setNewContacts,
    setNewMessage,
    listDialogs,
    setNewDialog
  } = props

  const cloneListContacts = cloneDeep(listContacts)
  const cloneListMessages = cloneDeep(listMessages)
  const cloneListDialogs = cloneDeep(listDialogs)

  const handleMessageSelected = (contact) => {
    const { id } = contact
    const exist = cloneListMessages.find(msg => msg.id === id)
    if (exist) {
      cloneListMessages.forEach(message => {
        if (message.id === id) {
          setSelectedContact(message)
        }
      })
    } else {
      cloneListDialogs.data[0][id] = []
      setSelectedContact(contact)
      setNewDialog(cloneListDialogs)
    }
    history.push('/index')
  }

  const handleDeleteContact = (id) => {
    const newListContacts = cloneListContacts.filter(contact => contact.id !== id)
    const newListMessage = cloneListMessages.filter(message => message.id !== id)

    setNewContacts({ contacts: newListContacts })
    setNewMessage({ message: newListMessage })
  }

  const { name, id } = contact
  return (
    <Container>
      <BoxPhoto>
        <Photo>{name.charAt(0).toUpperCase()}</Photo>
      </BoxPhoto>
      <Detail>
        <div  onClick={() => handleMessageSelected(contact)}>
          {name}
        </div>
        <DetailOptions>
          <div onClick={() => handleMessageSelected(contact)}><Icon name="edit outline" /></div>
          <div onClick={() => handleDeleteContact(id)}><Icon name="remove" /></div>
        </DetailOptions>
      </Detail>
    </Container>
  )
}

const mapStateToProps = state => ({
  user: state.User.user,
  listContacts: state.Contacts.contacts,
  listMessages: state.Message.message,
  listDialogs: state.Dialogs,
})

const mapDispatchToProps = dispatch => ({
  setSelectedContact: obj => dispatch(setSelectedContact(obj)),
  setNewContacts: obj => dispatch(setContacts(obj)),
  setNewMessage: obj => dispatch(newMessage(obj)),
  setNewDialog: obj => dispatch(setDialog(obj)),
})

const Main = connect(mapStateToProps, mapDispatchToProps)(BoxMessage)

export default withRouter(Main)