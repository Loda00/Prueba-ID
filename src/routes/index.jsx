import React from 'react'
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'

import Index from './Index'
import Contacts from './Contacts'
import NotFound from './NotFound'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Redirect to="/index" />
          )}
        />
        <Route path="/index" component={Index} />
        <Route path="/contacts" component={Contacts} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes