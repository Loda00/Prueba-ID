import React from 'react'
import { connect } from 'react-redux'
import { isEmpty, cloneDeep } from 'lodash'
import { Container, Body } from '../style'
import Header from 'Layouts/HeadContacts'
import BoxContact from 'components/BoxContact'


const Contacts = (props) => {
  const { listContacts } = props

  let arrayContacts = []
  if (!isEmpty(listContacts)) {
    const cloneContacts = cloneDeep(listContacts)
    arrayContacts = cloneContacts.map((contact, i) => (
      <BoxContact contact={contact} key={i} onlyName />
    ))
  }

  return (
    <Container>
      <Header />
      <Body>
        {arrayContacts}
      </Body>
    </Container>
  )
}

const mapStateToProps = state => ({
  listContacts: state.Contacts.contacts,
})

const Main = connect(mapStateToProps)(Contacts)

export default Main