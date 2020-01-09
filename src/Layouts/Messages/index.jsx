import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
import { isEmpty } from 'lodash'
import BoxMessage from 'components/BoxMessage'

import { Container, Profile } from './style'

const Messages = (props) => {
  const { messages } = props

  const [ listMessages, setListMessages ] = useState(messages)
  
  useEffect(() => {
    setListMessages(messages)
  }, [ messages ])

  let arrayMessage = []
  if (!isEmpty(listMessages)) {
    arrayMessage = listMessages.map((msg, i) => (
      <BoxMessage key={i} message={msg} render />
    ))
  }

  return (
    <Container>
      <Profile>
        <div>Photo</div>
        <NavLink to="/contacts">
          Contacts
        </NavLink>
      </Profile>
      {arrayMessage}
    </Container>
  )
}

const mapStateToProps = state => ({
  messages: state.Message.message,
})

const Main = connect(mapStateToProps)(Messages)

export default withRouter(Main)
