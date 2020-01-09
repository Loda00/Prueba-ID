import React, { useState, Fragment } from 'react'
import { connect } from 'react-redux'
import { isEmpty, cloneDeep } from 'lodash'
import { Container, Contact, ContentDialog, Dialog, BoxInputMessage, Input, Button } from './style'
import { setDialog } from 'action/Dialog'
import { newMessage } from 'action/Message'

import MessageDialog from 'components/MessageDialog'
import NotData from 'Layouts/NotData'

const Conversation = (props) => {
  const {
    selectedContact: {
      id
    },
    selectedContact,
    dialogs,
    setNewDialog,
    setNewMessage,
    listMessages
  } = props

  const [message, setMessage] = useState('')
  const cloneDialogs = cloneDeep(dialogs)

  const handleInputChange = (e, fn) => {
    e.preventDefault()
    const { value } = e.target
    fn(value)
  }

  const handleSendMessage = () => {
    sendMessage()
  }

  const sendMessage = () => {
    if (!isEmpty(message)) {
      const cloneMessages = cloneDeep(listMessages)
      const objMessage = {
        user: true,
        message
      }
  
      cloneDialogs.data[0][id].push(objMessage)
  
      const newMessage = cloneMessages.map(msg => {
        if (msg.id === id) {
          msg.lastMessage = message
        }
        return msg
      })
  
      cloneMessages.push([ {[id]: objMessage }])
  
      setNewDialog({ data: cloneDialogs.data })
      setNewMessage({ message: newMessage })
      setMessage('')
    }
  }

  const test = (e) => {
    if (e.which === 13) {
      sendMessage()
    }
  }

  let messages = []
  if (!isEmpty(selectedContact)) {
    messages = cloneDialogs.data[0][selectedContact.id].map((dialog, i) =>(
      <MessageDialog message={dialog} key={i} />
    ))
  }

  return (
    <Fragment>
      {!isEmpty(selectedContact) ? (
        <Container>
          <Contact>{selectedContact.contact}</Contact>
          <ContentDialog>
            <Dialog>
              <div>
                {messages}
              </div>
            </Dialog>
            <BoxInputMessage>
              <Input
                placeholder="Escribe un mensaje aquí"
                type="text"
                value={message}
                name="message"
                onChange={e => handleInputChange(e, setMessage)}
                onKeyPress={test}
              />
              <Button onClick={handleSendMessage} >Send</Button>
            </BoxInputMessage>
          </ContentDialog>
        </Container>
      ) : (
          <Fragment>
            <NotData />
          </Fragment>
        )
      }
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  setNewDialog: obj => dispatch(setDialog(obj)),
  setNewMessage: obj => dispatch(newMessage(obj)),
})

const mapStateToProps = state => ({
  user: state.User.user,
  selectedContact: state.SelectedContact,
  dialogs: state.Dialogs,
  listMessages: state.Message.message
})

const Main = connect(mapStateToProps, mapDispatchToProps)(Conversation)

export default Main
