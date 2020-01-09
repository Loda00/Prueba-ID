import React, { Fragment } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Root from 'routes/Index'
import Index from './Index'
import Create from './Create'
import NotFound from 'routes/NotFound'



const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/index" component={Root} />
          <Route exact path="/contacts" component={Index} />
          <Route exact path="/contacts/create" component={Create} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default Routes