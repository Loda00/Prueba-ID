import React from 'react'
import { connect } from 'react-redux'
import { Container, UserMessage, Message } from './style'

const MessageDialog = ({ message, user, selectedContact }) => {
  return (
    <Container>
      <UserMessage>{ message.user ? user.name : selectedContact.contact }</UserMessage>
      <Message>{ message.message }</Message>
    </Container>
  )
}

const mapStateToProps = state => ({
  user: state.User.user,
  selectedContact: state.SelectedContact
})

const Main = connect(mapStateToProps)(MessageDialog)

export default Main