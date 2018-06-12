import React from 'react'
import {Switch, Route} from 'react-router-dom'

import DashboardView from './views/DashboardView'

const Content = () => (
  <div>
    <Switch>
      <Route path="/" component={DashboardView}/>
      <Route render={() => <h1>Not found</h1>}/>
    </Switch>
  </div>
);

export default Content