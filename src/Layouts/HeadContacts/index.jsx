import React, { Fragment } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

import { Header } from './style'

const HeaderContacts = (props) => {
  const { history } = props

  return (
    <Fragment>
      <Header>
        <h1>Contacts</h1>
        <NavLink to="/index">
          <Icon name="chat" />
        </NavLink>
        <NavLink to={history.location.pathname === '/contacts/create' ? '/contacts' : '/contacts/create'}>
          {history.location.pathname === '/contacts/create' ? (<Icon name="list" />) : (<Icon name="plus" />)}
        </NavLink>
      </Header>
    </Fragment>
  )
}

export default withRouter(HeaderContacts)