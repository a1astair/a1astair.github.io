import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/app'
import Dashboard from './containers/dashboard-container'

import { RouterPaths } from './config'
export default (
  <Route path={RouterPaths.ROOT} component={App}>
    <IndexRoute component={Dashboard}/>
    <Route path="*" component={Dashboard} />
  </Route>
)
