import React from 'react';
import './App.css';

import Routes from './routes'

import { connect } from 'react-redux'
import { Container, Body } from 'routes/Index/style'

const App = (props) => {
  return (
    <Container>
      <Body>
        <Routes />
      </Body>
    </Container>
  );
}

const mapStateToProps = state => ({
  id: state.Message,
})


export default connect(mapStateToProps)(App);
