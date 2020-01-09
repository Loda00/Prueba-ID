import React, { useState } from 'react'
import { Container, Body } from '../style'
import { cloneDeep, isEmpty } from 'lodash'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setContacts } from 'action/Contacts'
import Header from 'Layouts/HeadContacts'

import { Button } from './style'


const CreateContacts = (props) => {
  const { setNewContact, listContacts, history } = props

  const [ name, setName ] = useState('')

  const handleChangeInput = (e, fn) => {
    const { value } = e.target
    fn(value)
  }

  const handleSaveContact = () => {
    if (!isEmpty(name)){
      const cloneListContacts = cloneDeep(listContacts)
      const contacts = {
        name,
        id: new Date().getTime()
      }
  
      cloneListContacts.push(contacts)
      
      setNewContact({ contacts: cloneListContacts })
      history.push('/contacts')
    }
  }

  return (
    <Container>
      <Header />
      <Body>
        <div>
          <h1>Form Create Contact</h1>
          <label>
            Nombre :
          <input type="text" onChange={e => handleChangeInput(e, setName)} value={name} />
          </label>
        </div>
        <div>
          <Button onClick={handleSaveContact}>Agregar</Button>
        </div>
      </Body>
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  setNewContact: obj => dispatch(setContacts(obj))
})

const mapStateToProps = state => ({
  listContacts: state.Contacts.contacts,
  test: state
})

const Main = connect(mapStateToProps, mapDispatchToProps)(CreateContacts)

export default withRouter(Main)