import React from 'react'
import { setSelectedContact } from 'action/SelectedContact'
import { Container, BoxPhoto, BoxLastMessage, Photo, LastMessage, Hour } from './style'
import { connect } from 'react-redux'

const BoxMessage = ({ message, setSelectedContact, dialog }) => {
  const handleMessageSelected = (msg) => {
    setSelectedContact(msg)
  }

  const { contact, lastMessage, hour } = message
  return (
    <Container onClick={() => handleMessageSelected(message)}>
      <BoxPhoto>
        <Photo>{contact.charAt(0).toUpperCase()}</Photo>
      </BoxPhoto>
      <BoxLastMessage>
        <Hour>
          <p>{contact}</p>
          <p>{hour}</p>
        </Hour>
        <LastMessage>{lastMessage}</LastMessage>
      </BoxLastMessage>
    </Container>
  )
}

const mapStateToProps = state => ({
  user: state.User.user,
  dialog: state.Dialogs.dialog
})

const mapDispatchToProps = dispatch => ({
  setSelectedContact: obj => dispatch(setSelectedContact(obj))
})

const Main = connect(mapStateToProps, mapDispatchToProps)(BoxMessage)

export default Main